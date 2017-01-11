// @import 'helpers/Utils.js';

var api = new Api();

function Api () {}

// ---------------------------------------- //
//                  Core API                //
// ---------------------------------------- //

Api.prototype.post = function(context, path, params) {
  logger.info("api.post()");
  return this.request(context, "POST", path, params);
};

Api.prototype.get = function(context, path, params) {
  logger.info("api.get()");
  return this.request(context, "GET", path, params);
};

Api.prototype.upload = function(context, urls, exportData) {
  logger.info("api.upload()");
  if (!urls && !exportData) return false;
  var bundlePath = exportData[0],
  schemaPath = exportData[1];
  return (api.uploadWithFilePath(context,urls.signedZippedUploadUrl, bundlePath)) && (api.uploadWithFilePath(context,urls.signedSchemaUploadUrl, schemaPath));
};

Api.prototype.request = function(context, method, path, params) {
  logger.info("api.request()");
  var url = utils.apiURL + path;
  logger.debug("Requesting : " + url);
  var req = NSMutableURLRequest.requestWithURL(NSURL.URLWithString(url));
  [req setHTTPMethod:method];
  [req setValue:"Sketch" forHTTPHeaderField:"User-Agent"];

  //Add Custom Header
  [req setValue:utils.sketchVersion forHTTPHeaderField:"X-Sketch-Version"];
  [req setValue:utils.version forHTTPHeaderField:"X-Sketch-Plugin-Version"];
  [req setValue:"application/json" forHTTPHeaderField:"Content-Type"];

  var token = utils.getActiveTokenFromComputer();
  if (token) {
    logger.debug("Token found");
    [req setValue:token forHTTPHeaderField:"Authorization"];
  }

  if (params) {
    logger.debug("params:"+params);
    jsonParams = [NSJSONSerialization dataWithJSONObject:params options:NSJSONWritingPrettyPrinted error:nil];
    req.HTTPBody = jsonParams;
  }

  var response = MOPointer.alloc().init(),
    error = MOPointer.alloc().init(),
    res = NSURLConnection.sendSynchronousRequest_returningResponse_error(req, response, error);

  //Handle 401 - workaround
  if (error.value() != nil && api.is401(error) && res != nil){
    var dataString = NSString.alloc().initWithData_encoding(res, NSUTF8StringEncoding);
    logger.error(dataString);
    var json = JSON.parse(dataString);
    if(path != 'login') {
      utils.dealWithNetErrors(context,res);
      utils.setActiveTokenOnComputer(nil);
      utils.setEmailOnComputer(nil);
      if (!path.match(/^upload-url/)){
        view.createLoginView(context);
      }
      return false;
    }
    return json;
  }

  //Handle other status code
  if(error.value() == nil && res != nil){
    var statusCode = [[response value] statusCode];
    logger.info("Response code: " + statusCode);
    if(statusCode != 200 && res) {
      utils.dealWithNetErrors(context, res); //Alert Error if status code is not 200
      if(statusCode == 400 || statusCode == 440){
        utils.setActiveTokenOnComputer(nil);
        utils.setEmailOnComputer(nil);
        view.createLoginView(context);
      }
    }
    var dataString = NSString.alloc().initWithData_encoding(res, NSUTF8StringEncoding);
    logger.debug(dataString);
    return JSON.parse(dataString);
  }else{
    logger.error("error");
    utils.dealWithNetErrors(context);
    return false;
  }
};

Api.prototype.uploadWithFilePath = function(context, url, filePath) {
  logger.info("api.uploadWithFilePath() : "+ filePath);
  var error = MOPointer.alloc().initWithValue(nil);
  var fileData = [NSData dataWithContentsOfFile:filePath options:8 error:error];
  utils.uploadBundleSize = [fileData length];

  if(!fileData) {
    logger.error("failed to read data: " + error.value());
    return;
  }
  var request = NSMutableURLRequest.requestWithURL(NSURL.URLWithString(url));
  [request setHTTPMethod:"PUT"];
  var body = [NSMutableData data];
  [body appendData:fileData];
  [request setHTTPBody:body];
  var response = MOPointer.alloc().init();
  var error = MOPointer.alloc().init();
  var res = NSURLConnection.sendSynchronousRequest_returningResponse_error(request, response, error);
  var dataString = NSString.alloc().initWithData_encoding(res, NSUTF8StringEncoding);
  logger.debug(dataString)
  if (error.value() == nil && res != nil) {
    var statusCode = [[response value] statusCode];
    return statusCode == 200;
  } else {
    utils.dealWithNetErrors(context,res);
    return false;
  }

};

//Workaround for 401 error: http://stackoverflow.com/questions/3912532/ios-how-can-i-receive-http-401-instead-of-1012-nsurlerrorusercancelledauthenti
Api.prototype.is401 = function( error ){
  logger.info("api.is401()");
  if (error == nil) return false;
  var errorString = [[error value] description];
  var strError = [NSString stringWithFormat:@"%@", [[error value] description]];
  if ([strError rangeOfString:@"Code=-1012"].location != NSNotFound) {
    logger.error("401 : Unauthorization");
    return true;
  }else{
    return false;
  }
};
