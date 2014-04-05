var koa = require('koa');
var route = require('koa-route');

// Create the app
app = koa();

// we'll use some very simple routes
app.use(route.get('/whosThere', noName));
app.use(route.get('/whosThere/:name', withName));

// Here's a couple of functions that returns some nice responses
function* noName() {
  var res = 'Sadly I cannot properly greet you, Anonymous';
  this.body = res;
};

function* withName(name) {
  name = decodeURI(name);
  var res = 'Ah, it is you! My old friend!\nHello ' + name;
  this.body = res;
};

// Let's fire this baby up
app.listen(3000);
console.log("This Koa site is now running at http://localhost:3000");
console.log("Hit it with /whosThere or /whosThere/yourName to get reponses");