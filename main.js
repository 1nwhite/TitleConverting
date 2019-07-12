const outputOne = document.querySelector('#converting-block-body_output__one');

const outputTwo = document.querySelector('#converting-block-body_output__two');

const blockBody = document.querySelector('.converting-block-body');

const insertBtn = document.querySelector('.converting-block-body-btn__insert');

const copyBtn = document.querySelector('.converting-block-body-btn__copy');

const openBtn = document.querySelector('.converting-block_open-btn');

const blockPalette = document.querySelector(".converting-block-palette");

const copyModal = document.querySelector(".converting-block-body-modal");

const inputModal = document.querySelector(".input-modal");

const modalInputField = document.querySelector(".input-modal-body_field");


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


insertBtn.addEventListener('click', function(){

	inputModal.classList.add("input-modal-actvie");

})


function getInputValue() {

	console.log(modalInputField.value);
	let titleRow = modalInputField.value.toLowerCase().trim(); 
	outputOne.innerText = titleRow;

	let deleteSymbolsResult = titleRow.split('').filter(deleteSymbols);
	let resultReplaceSpace = replaceSpace(deleteSymbolsResult);

	

	let checkDashResult = checkDash(resultReplaceSpace).join("");

	outputTwo.innerText = checkDashResult;

	hideInputModal();
	clearInput();

}

function removeModal() {
	setTimeout(function(){
		copyModal.classList.remove("converting-block-body-modal-active");
		isModalOpen = false;
	}, 1500)
}

let isModalOpen = false;

copyBtn.addEventListener('click', function() {
	navigator.clipboard.writeText(outputTwo.innerText);

	if(!isModalOpen && !!outputTwo.textContent) {
		copyModal.classList.add("converting-block-body-modal-active");

		copyModal.innerText = "Copied";

		isModalOpen = true;
		removeModal();

	} else {

		copyModal.classList.add("converting-block-body-modal-active");
		copyModal.innerText = "Empty";
		removeModal();

		return false;
	}
	
})


class Palette {
  constructor(element) {
    this.colors = ["red", "green", "blue", "orange", "pink", "purple"];
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

	blockBody.classList.toggle("block-body-border")

});


const API_KEY =
  "1dbbc08fca66e388519b3006d9f5d90d386cbf29d6d1cd72cc83333117581266";
const defaultSrc =
  "https://cdn1-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg";

function getImage(query) {
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
    	const randIdx = getRandomNumber(data.results);
      const imageUrl = data.results[randIdx].urls.regular;
      if (imageUrl) {
      	setBackgroundBody(testImage, imageUrl);	
      }

      console.log(randIdx)
      
      return data;
    })
    .catch(err => console.log(err));
}

const input = document.querySelector(".input");
const testImage = document.querySelector("body");
testImage.setAttribute("src", defaultSrc);

input.addEventListener("input", setQuery);

function setQuery(e) {
  const query = e.target.value || defaultSrc;
  getImage(query);
}

function setBackgroundBody(body, imageUrl) {
	body.style.background = `url(${imageUrl}) no-repeat center / cover`;
}

function getRandomNumber(arr) {
	return Math.floor(Math.random() * arr.length);
}



document.querySelector("#input-modal_btn--ok").addEventListener("click", getInputValue);

function hideInputModal() {

	inputModal.classList.remove("input-modal-actvie");

	clearInput();
}

document.querySelector("#input-modal_btn--cancel").addEventListener("click", hideInputModal);

function clearInput() {

	modalInputField.value = '';
}