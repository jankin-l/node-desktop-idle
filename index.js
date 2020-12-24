var path = require('path');
var nodeAbi = require('node-abi');
var binding_path = path.join(__dirname, "lib", "binding", "node-v" + nodeAbi.getAbi(process.version) + "-" + process.platform + "-" + process.arch, "desktopIdle.node");
var desktopIdle = require(binding_path);
module.exports = desktopIdle;