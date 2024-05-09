const moment = require('./dayjInsteadOfMomentShim.js');
const reactMomentPropTypesShim = require('./reactMomentPropTypesShim.js');

const Module = require('module');
const originalRequire = Module.prototype.require;

Module.prototype.require = function() {
  if (arguments[0] === 'moment' || arguments[0] === 'moment/min/moment-with-locales') {
    return moment;
  }
  if (arguments[0] === 'react-moment-proptypes') {
    return reactMomentPropTypesShim;
  }
  return originalRequire.apply(this, arguments);
};
