let outputOne = document.querySelector('#converting-block-body_output__one');

let outputTwo = document.querySelector('#converting-block-body_output__two');

let button = document.querySelector('.converting-block-body-btn');

let copyBtn = document.querySelector('.converting-block-body-btn__copy');


button.addEventListener('click', function(){

	let titleRow = prompt('','').split();

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
			"-"
		];

		for (let j = 0; j < rules.length; j++) {
		    if (element === rules[j]) {
		      return false;
		    }
		  }

  	return true;

	}

let deleteSymbolsResult = titleRow.filter(deleteSymbols);

function checkDash(element) {

	let newRow = [];

	for (let i = 0; i < element.length; i++) {

    if (element[i] === "-" && element[i+1] === "-") {
      continue;

    }
    newRow.push(element[i])
	}
	return newRow;
}

let checkDashResult = checkDash(deleteSymbolsResult).join("");

outputTwo.innerText = checkDashResult;

	// function makeUrl(str) {
	//   let arr = sourceStr.split("").filter(deleteQuestionMark).filter(deleteTwoDots).filter(deleteDot).filter(deleteLine).join("").trim().toLowerCase().split(' ').join('-');

	//  function deleteQuestionMark(value) {
	//    return value !== '?'
	//  }

	//  function deleteTwoDots(value) {
	//    return value !== ':'
	//  }

	//  function deleteDot(value) {
	//    return value !== "'"
	//  }

	//  function deleteLine(value) {
	//    return value !== "-"
	//  }

	//   return arr;
	// }

	// function doubleLine(value) {
	//  	for(let i = 0; i <= value.length; i++) {

	//  		for(let j = i+1; j <= value.length; j++) {

	//  			if(value[i] === '-' && value[j] === '-') {

	//  				value[j] = '';

	//  			}
	//  		}
	//  	 return value;
	//  	}
	//  }


	// let result = makeUrl(sourceStr);

	// doubleLine(result);

	// outputTwo.innerText = result;
})

copyBtn.addEventListener('click', function() {
	let range = document.createRange();
	range.selectNode(outputTwo);
	window.getSelection().addRange(range);

	try{
		document.execCommand('copy');
		// alert(`Copied the text: ${range}`);
	} catch(err) {
		console.log("Can't copy")
	}

	// window.getSelection().removeAllRanges();
})