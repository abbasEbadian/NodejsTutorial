exports.getCurrentTime = function (){
	let curr = new Date();
	return curr.getHours() + ":" + curr.getMinutes();
}