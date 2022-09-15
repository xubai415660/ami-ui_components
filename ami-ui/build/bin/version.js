var fs = require('fs');
var path = require('path');
var version = process.env.VERSION || require('../../package.json').version;
var content = {'0.0.1-beta': '0.0.1-beta'};
if (!content[version]) content[version] = '0.0.1-beta';
fs.writeFileSync(path.resolve(__dirname, '../../examples/versions.json'), JSON.stringify(content));
