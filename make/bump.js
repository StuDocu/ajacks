var fs = require('fs')
  , version = require('../package.json').version;

['./ajacks.js', './ajacks.min.js'].forEach(function (file) {
  var data = fs.readFileSync(file, 'utf8')
  data = data.replace(/^\/\*\!/, '/*! version: ' + version)
  fs.writeFileSync(file, data)
})
