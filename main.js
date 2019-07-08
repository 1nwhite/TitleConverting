let outputOne = document.querySelector('#converting-block-body_output__one');

let outputTwo = document.querySelector('#converting-block-body_output__two');

let button = document.querySelector('.converting-block-body-btn');

let copyBtn = document.querySelector('.converting-block-body-btn__copy');

let openBtn = document.querySelector('.converting-block_open-btn');

let blockPalette = document.querySelector(".converting-block-palette");


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

class Palette {
  constructor(element) {
    this.colors = ["red", "green", "blue", "Yulka", "pink", "purple"];
    this.element = element;
  }

  changeColor() {
    const { element, colors } = this;

    return ({ target }) => {
      colors.forEach(color => {
        element.classList.remove(color);
      });
      element.classList.add(target.dataset.color);
    };
  }

  addClickEvent() {
    const buttons = document.querySelectorAll(".converting-block-palette-body_link");
    buttons.forEach(button => {
      button.addEventListener("click", this.changeColor());
    });
  }

  render(container) {
    const { colors } = this;

    container.innerHTML = `<ul class="converting-block-palette-body_list">${colors
      .map(color => {
        return `<li class="${color} converting-block-palette-body_link" data-color="${color}">${color}</li>`;
      })
      .join("")}</ul>`;
  }
}

const targetElement = document.querySelector(".converting-block-body");
const container = document.querySelector(".converting-block-palette-body");

const palette = new Palette(targetElement);
palette.render(container);
palette.addClickEvent();


openBtn.addEventListener("click", function() {
	blockPalette.classList.toggle("palette-active");

	openBtn.classList.toggle("open-btn-active");

});
