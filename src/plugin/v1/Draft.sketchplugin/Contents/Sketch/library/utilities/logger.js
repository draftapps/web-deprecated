var LOG_DEBUG = 1,
  LOG_INFO = 2,
  LOG_WARN = 3,
  LOG_ERROR = 4,
  logger = new Logger();

function Logger(logLevel) {
  this.logLevel = logLevel || 1; //Default to debug only
}

Logger.prototype.setLogLevel = function(logLevel) {
  this.logLevel = logLevel;
}

// Log a message
Logger.prototype.log = function(msg) {
  log(msg);
}

// Log a DEBUG message
Logger.prototype.debug = function(msg) {
  if(this.logLevel <= LOG_DEBUG) {
    this.log("DEBUG: " + msg);
  }
}

// Log an INFO message
Logger.prototype.info = function(msg) {
  if(this.logLevel <= LOG_INFO) {
    this.log("INFO: " + msg);
  }
}

// Log a WARNING message
Logger.prototype.warning = function(msg) {
  if(this.logLevel <= LOG_WARN) {
    this.log("WARNING: " + msg);
  }
}

// Log an ERROR message
Logger.prototype.error = function(msg) {
  if(this.logLevel <= LOG_ERROR) {
    this.log("ERROR: " + msg);
  }
}
