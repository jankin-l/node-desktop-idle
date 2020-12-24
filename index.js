var path = require('path');
var nodeAbi = require('node-abi');
var binary = require('node-pre-gyp');
var fs = require('fs');

var binding_path;
if(fs.existsSync(path.join(__dirname, 'package.json'))) {
  binding_path = binary.find(path.resolve(path.join(__dirname, 'package.json')));
} else {
  binding_path = path.join(__dirname, "lib", "binding", "node-v" + nodeAbi.getAbi(process.version) + "-" + process.platform + "-" + process.arch, "desktopIdle.node");
}

var desktopIdle = require(binding_path);
module.exports = desktopIdle;