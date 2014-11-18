var koa = require('koa');
var router = require('koa-router');

var app = koa();
app.use(router(app));

app.get('', function *(next) {
  return;
  this.body = 'nothing';
});

app.listen(8080);
console.log('Server started @ ' + '127.0.0.1' + ':' + 8080);
