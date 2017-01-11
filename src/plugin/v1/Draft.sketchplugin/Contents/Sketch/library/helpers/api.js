/* Documentation
   Api GET and POST has 3 possible return values
   1. { body: .., statusCode: 2.. } -> Success
   2. { body: .., statusCode: 4.. } -> Error
   3. false -> Token invalid, need to login again
*/

var api = new Api();

function Api () {}

Api.prototype.validateToken = function() {
  if (DraftApp.isAuthHeaderExist()) {
    logger.info("Validating tokens..");
    var response = this.request("GET", "/auth/validate_token", {});

    logger.debug("Token validation response: " + JSON.stringify(response));
    if (response) {
      return true;
    } else {
      logger.info("Token validation failed, need to login");
      return false;
    }
  } else {
    return false;
  }
};

Api.prototype.post = function(path, params) {
  logger.info("api.post()");

  if (!this.validateToken()) return false;

  return this.request("POST", path, params);
};

Api.prototype.get = function(path, params) {
  logger.info("api.get()");

  if (!this.validateToken()) return false;

  return this.request("GET", path, params);
};

Api.prototype.request = function(method, path, params) {
  logger.info("api.request()" + " type: " + method + " to path: " + path);

  var url = DraftApp.apiURL + path;
  logger.debug("Requesting: " + url);

  var req = NSMutableURLRequest.requestWithURL(NSURL.URLWithString(url));
  [req setHTTPMethod:method];

  // Request Headers
  [req setValue:"Sketch" forHTTPHeaderField:"User-Agent"];
  [req setValue:"application/json" forHTTPHeaderField:"Content-Type"];
  // [req setValue:DraftApp.sketchVersion forHTTPHeaderField:"X-Sketch-Version"];
  // [req setValue:DraftApp.version forHTTPHeaderField:"X-Sketch-Plugin-Version"];

  var authHeaders = DraftApp.readAuthHeaders();
  var token       = authHeaders.accessToken;
  var client      = authHeaders.client;
  var expiry      = authHeaders.expiry;
  var uid         = authHeaders.uid;

  logger.info("api.request() accessToken: " + token);

  logger.info("Setting request auth headers");
  [req setValue:token forHTTPHeaderField:"access-token"];
  [req setValue:"Bearer" forHTTPHeaderField:"token-type"];
  [req setValue:client forHTTPHeaderField:"client"];
  [req setValue:expiry forHTTPHeaderField:"expiry"];
  [req setValue:uid forHTTPHeaderField:"uid"];

  if (params && method == "POST") {
    var body = [NSMutableData data];

    if (params.hasOwnProperty('filePath')) {
      var error      = MOPointer.alloc().initWithValue(nil);
      var filePath   = params.filePath;
      var fileData   = [NSData dataWithContentsOfFile:filePath options:0 error:error];
      // var uploadSize = [fileData length];
      // var mimetype   = [NSString mimeTypeForPath:filePath];
      logger.info("api.uploadWithFilePath() : "+ filePath);

      var myboundary  = [NSString stringWithString:@"---------------------------14737809831466499882746641449"];
      var contentType = [NSString stringWithFormat:@"multipart/form-data; boundary=%@", myboundary];
      [req setValue:contentType forHTTPHeaderField:@"Content-Type"];
      // [req setValue:uploadSize forHTTPHeaderField:@"Content-Length"];

      if(!fileData) {
        logger.error("Failed to read data: " + error.value());
        return;
      } else {
        logger.info("File is successfully read");
      }

      [body appendData:[[NSString stringWithFormat:@"--%@\r\n", myboundary] dataUsingEncoding:NSUTF8StringEncoding]];

      if (params.objectId) {
        object_id = [NSString stringWithString:@"object_id"];
        [body appendData:[[NSString stringWithFormat:@"Content-Disposition: form-data; name=%@\r\n\r\n", object_id] dataUsingEncoding:NSUTF8StringEncoding]];
        [body appendData:[[NSString stringWithFormat:@"%@\r\n", params.objectId] dataUsingEncoding:NSUTF8StringEncoding]];
        [body appendData:[[NSString stringWithFormat:@"--%@\r\n", myboundary] dataUsingEncoding:NSUTF8StringEncoding]];
      }

      name = [NSString stringWithString:@"file"];
      fileName = [NSString stringWithString:params.fileName];
      [body appendData:[[NSString stringWithFormat:@"Content-Disposition: form-data; name=%@; filename=%@\r\n", name, fileName] dataUsingEncoding:NSUTF8StringEncoding]];
      [body appendData:[[NSString stringWithString:@"Content-Type: image/png\r\n\r\n"] dataUsingEncoding:NSUTF8StringEncoding]];
      [body appendData:[NSData dataWithData:fileData]];
      [body appendData:[@"\r\n" dataUsingEncoding:NSUTF8StringEncoding]];
      [body appendData:[[NSString stringWithFormat:@"--%@--\r\n", myboundary] dataUsingEncoding:NSUTF8StringEncoding]];
    } else {
      jsonParams = [NSJSONSerialization dataWithJSONObject:params options:NSJSONWritingPrettyPrinted error:nil];
      [body appendData:jsonParams];
    }

    [req setHTTPBody:body];
  }

  var response   = MOPointer.alloc().init();
  var error      = MOPointer.alloc().init();
  var res        = NSURLConnection.sendSynchronousRequest_returningResponse_error(req, response, error);
  var dataString = NSString.alloc().initWithData_encoding(res, NSUTF8StringEncoding);

  logger.debug("Response: " + dataString);

  if (error.value() && api.is401(error) && res) {
    logger.error("Error happened: " + dataString);

    return dataString;
  }

  // Handle other status codes
  if (!error.value() && res) {
    var statusCode = [[response value] statusCode];
    logger.info("Response code: " + statusCode);

    if (statusCode != 200 && response) {
      // this.dealWithNetErrors(response); //Alert Error if status code is not 200
      if (statusCode == 400 || statusCode == 440) {
        logger.debug("Status code is 400 || 440");
        // DraftApp.resetAccessToken(); // No need to reset
        // TODO: Return status code, so the app can report that back
        DraftApp.resetAccessToken();
        // DraftApp.loginPanel();
      }
    }

    // Parse auth headers and save them
    var headerFields = [[response value] allHeaderFields];

    var authHeaders = {};
    authHeaders.accessToken = headerFields["access-token"];
    authHeaders.client      = headerFields["client"];
    authHeaders.expiry      = headerFields["expiry"];
    authHeaders.uid         = headerFields["uid"];

    if (authHeaders.accessToken)
      DraftApp.saveAuthHeaders(authHeaders);

    return { body: JSON.parse(dataString), statusCode: statusCode };

  } else {
    logger.error("error");
    return false;
  }
};

// Workaround for 401 error: http://goo.gl/GE3LNm
Api.prototype.is401 = function( error ) {
  logger.info("api.is401()");

  if (error == nil) return false;

  var errorString = [[error value] description];
  var strError = [NSString stringWithFormat:@"%@", [[error value] description]];

  if ([strError rangeOfString:@"Code=-1012"].location != NSNotFound) {
    logger.error("401 : Unauthorization - True");
    return true;
  } else {
    return false;
  }
};
