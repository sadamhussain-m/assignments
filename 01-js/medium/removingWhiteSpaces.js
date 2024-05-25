const removeWhitespaces = (string) => {
	// Write your code here

	let res=string.replace(/\s\t\n/g,'');

	console.log(res);
}


removeWhitespaces('\t  \n\n')