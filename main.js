let outputOne = document.querySelector('#converting-block-body_output__one');

let outputTwo = document.querySelector('#converting-block-body_output__two');

let button = document.querySelector('.converting-block-body-btn');

let copyBtn = document.querySelector('.converting-block-body-btn__copy');


button.addEventListener('click', function(){

	let titleRow = prompt('Insert Title','').toLowerCase().trim();

	outputOne.innerText = titleRow;

	function deleteSymbols(element) {

		const rules = [
			".",
			",",
			"!",
			"/",
			"'",
			"?",
			":",
			"(",
			")",
			`"`,
			`'`,
			"_",
			"`",
			"\\",
			"{",
			"}"
		];

		for (let j = 0; j < rules.length; j++) {
		    if (element === rules[j]) {
		      return false;
		    }
		  }

		return true;

	}

	let deleteSymbolsResult = titleRow.split('').filter(deleteSymbols);

	function replaceSpace(array) {

	let newRow = [];

	for (let i = 0; i < array.length; i++) {

	    if (array[i] === " ") {
	    	newRow.push('-')
	    }else{
	    	newRow.push(array[i])
	    }
	    
	}
	return newRow;
	}

	let resultReplaceSpace = replaceSpace(deleteSymbolsResult);

	function checkDash(array) {

		let newRow = [];

		for (let i = 0; i < array.length; i++) {

	    if (array[i] === "-" && array[i+1] === "-") {
	      continue;

	    }
	    newRow.push(array[i])
		}
		return newRow;
	}

	let checkDashResult = checkDash(resultReplaceSpace).join("");

	outputTwo.innerText = checkDashResult;

	copyBtn.addEventListener('click', function() {
	navigator.clipboard.writeText(checkDashResult)
	})

})

