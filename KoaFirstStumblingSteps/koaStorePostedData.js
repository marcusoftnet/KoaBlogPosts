// Create the application
var koa = require('koa');
var route = require('koa-route');
var parse = require('co-body');
var app = module.exports = koa();

// Get monk up an running
var monk = require('monk');
var wrap = require('co-monk');
var db = monk('localhost/koausers');
var users = wrap(db.get('users'));

// Set up some routes
app.use(route.post('/user', create));
app.use(route.get('/user', list));

// And here is the handling code
function *create() {
	// Parse the user from the posted data
	// using the co-body package
	var user = yield parse(this);
	user.created_on = new Date;

	// Store it in database
	try
	{
		this.body = yield users.insert(user);
		this.status = 201;
	}
	catch(e)
	{
		this.body = "An error occured: " + e;
		this.status = 401;
	}
};

function *list() {
  var res = yield users.find({});
  this.body = res;
};

// fire it up
app.listen(3000);
console.log("Post to http://localhost:3000/user to store new stuff");
console.log("Get from http://localhost:3000/user to see your users");