var url = require('url');
var address = 'abcg.com';

var parsing = url.parse(address, true);
console.log(parsing.host);
console.log(parsing.auth);
console.log(parsing.search);


// while consuming any call there may be req whwre you need to utilize specific details