var app = require('express')();
var proxy = require('express-http-proxy');
const serve   = require('express-static');

app.use('/api', proxy('http://49.4.12.144:8080/'))
app.use(serve(__dirname + '/www'));

app.listen(8000, function(){
  console.log('server is running at %s');
})

