// Ending sequence
function* endingIncrements(){
	for (var i = 0; i < 3; i++) {
		yield i;
	}
};

var endingInstance = endingIncrements();
console.log(endingInstance.next());
console.log(endingInstance.next());
console.log(endingInstance.next());
console.log(endingInstance.next());
console.log(endingInstance.next());