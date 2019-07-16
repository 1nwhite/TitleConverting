const left = document.querySelector(".stroke__left");
const right = document.querySelector(".stroke__right");
const center = document.querySelector(".stroke__center");
const historyModal = document.querySelector("#history-modal");
const historyModalList = document.querySelector(".history-modal_list");
const historyModalBtn = document.querySelector(".history-modal-btn");

function addAnimations() {
  left.classList.add("stroke__left--animate");
  right.classList.add("stroke__right--animate");
  center.classList.add("stroke__center--animate");
}

function removeAnimations() {
  left.classList.remove("stroke__left--animate");
  right.classList.remove("stroke__right--animate");
  center.classList.remove("stroke__center--animate");
}

function addCompletedState() {
  left.classList.add("stroke__left--animation-completed");
  right.classList.add("stroke__right--animation-completed");
  center.classList.add("stroke__center--animation-completed");
}

function removeCompletedState() {
  left.classList.remove("stroke__left--animation-completed");
  right.classList.remove("stroke__right--animation-completed");
  center.classList.remove("stroke__center--animation-completed");
}

function addReverseAnimations() {
  left.classList.add("stroke__left--animate-reverse");
  right.classList.add("stroke__right--animate-reverse");
  center.classList.add("stroke__center--animate-reverse");
}

function removeReverseAnimations() {
  left.classList.remove("stroke__left--animate-reverse");
  right.classList.remove("stroke__right--animate-reverse");
  center.classList.remove("stroke__center--animate-reverse");
}

let isAnimationActive = false;

function animate() {
  if (!isAnimationActive) {
    historyModalBtn.classList.add("disable-click");
    isAnimationActive = true;
    addAnimations();

    setTimeout(() => {
      addCompletedState();
      removeAnimations();
      historyModalBtn.classList.remove("disable-click");
    }, 400);
  } else {
    
    addReverseAnimations();
    isAnimationActive = false;
    setTimeout(() => {
      removeCompletedState();
      removeReverseAnimations();
      
    }, 400);
  }
}

historyModalBtn.addEventListener("click", historyModalHandler);

let isHistoryModalOpen = false;

function historyModalHandler() {
  animate();

  if(!isHistoryModalOpen) {
    openHistoryModal();
  } else {
    closeHistoryModal();
  }
}

function openHistoryModal() {
  historyModal.classList.add("history-modal-active");  
  isHistoryModalOpen = true;
}

function closeHistoryModal() {
  historyModal.classList.remove("history-modal-active"); 
  isHistoryModalOpen = false; 
}

let historyData = [];

function createHistoryItem({title, text}) {
  const li = document.createElement("li");

  li.classList.add("history-modal_row")
  li.innerHTML = ` 
   <h4 class="history-modal_insert-title">${title}</h4>
    <p class="history-modal_copy-title">${text}</p>
    <button class="history-modal_copy-btn "></button>
  `

  return li;
}

function renderHistory() {
  historyModalList.innerHTML = '';

  historyData.map(function(data) {
  historyModalList.append(createHistoryItem(data));
  })
}

document.body.addEventListener("keydown", function(e) {
  if(e.keyCode === 27 && isHistoryModalOpen) {
    closeHistoryModal();
    animate();
  }

})


