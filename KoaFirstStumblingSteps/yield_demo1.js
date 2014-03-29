function* neverEndingIncrements(){
	var i = 1;
	while(true){
		yield i++;
	}
};

// create an instance of the generator
var instance = neverEndingIncrements();

// now use it by calling next
console.log(instance.next());

// next returns an JSON object
var r = instance.next();
console.log("The value is: " + r.value);
console.log("The done parameter indicate if the sequence complete: " + r.done);