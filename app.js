console.log('Managing Node Versions');
console.log('The node version you are using on here is ' + process.version);

var tryModule = require('./sample_module.js');
console.log('FirstName here is ' + tryModule.firstName);
console.log('FirstName here is ' + tryModule.lastName);
console.log('FullName is ' + tryModule.getName(tryModule.firstName, tryModule.lastName));
