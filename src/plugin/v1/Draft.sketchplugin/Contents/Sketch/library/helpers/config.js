// config.js

DraftApp.extend({
  getConfigs: function(container){
    logger.info('config.getConfigs()');
    var container = container || this.symbolsPage,
    command = this.command,
    prefix = this.prefix,
    configsData = command.valueForKey_onLayer(prefix, container);
    return JSON.parse(configsData);
  },
  setConfigs: function(newConfigs, container){
    logger.info('config.setConfigs()');
    var container = container || this.symbolsPage,
    command = this.command,
    prefix = this.prefix,
    configs = this.extend(newConfigs, this.getConfigs(container) || {});

    configs.timestamp = new Date().getTime();
    var configsData = JSON.stringify(configs);
    command.setValue_forKey_onLayer(configsData, prefix, container);
    return configs;
  },
  removeConfigs: function(container){
    logger.info('config.removeConfigs()');
    var container = container || this.symbolsPage,
    command = this.command,
    prefix = this.prefix;
    command.setValue_forKey_onLayer(null, prefix, container)
  },
  saveAuthHeaders: function (data) {
    var accessToken = data.accessToken;
    var client      = data.client;
    var expiry      = data.expiry;
    var uid         = data.uid;

    logger.debug("config.saveAuthHeaders(): tokens: " + JSON.stringify(data));

    [[NSUserDefaults standardUserDefaults] setObject:accessToken forKey:"draft.accesstoken"];
    [[NSUserDefaults standardUserDefaults] setObject:client forKey:"draft.client"];
    [[NSUserDefaults standardUserDefaults] setObject:expiry forKey:"draft.expiry"];
    [[NSUserDefaults standardUserDefaults] setObject:uid forKey:"draft.uid"];
    [[NSUserDefaults standardUserDefaults] synchronize];
  },
  readAuthHeaders: function () {
    var data = {};

    data.accessToken = [[NSUserDefaults standardUserDefaults] objectForKey:"draft.accesstoken"];
    data.client      = [[NSUserDefaults standardUserDefaults] objectForKey:"draft.client"];
    data.expiry      = [[NSUserDefaults standardUserDefaults] objectForKey:"draft.expiry"];
    data.uid         = [[NSUserDefaults standardUserDefaults] objectForKey:"draft.uid"];

    return data;
  },
  isAuthHeaderExist: function () {
    logger.info("Checking if auth tokens exist");
    var authHeaders = this.readAuthHeaders();

    logger.debug("api.isAuthHeaderExist(): accessToken: " + authHeaders.accessToken);

    if (!authHeaders.accessToken) return false;
    if (!authHeaders.client) return false;
    if (!authHeaders.expiry) return false;
    if (!authHeaders.uid) return false;

    logger.info("Tokens exist!");
    return true;
  },
  resetAccessToken: function () {
    logger.info("config.resetAccessToken()");
    [[NSUserDefaults standardUserDefaults] setObject:nil forKey:"draft.accesstoken"];
    [[NSUserDefaults standardUserDefaults] setObject:nil forKey:"draft.client"];
    [[NSUserDefaults standardUserDefaults] setObject:nil forKey:"draft.expiry"];
    [[NSUserDefaults standardUserDefaults] setObject:nil forKey:"draft.uid"];
    [[NSUserDefaults standardUserDefaults] synchronize];
  },
  isEmpty: function (obj) {
   for (var x in obj) { return false; }
   return true;
  }
});
