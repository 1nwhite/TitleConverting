const left = document.querySelector(".stroke__left");
const right = document.querySelector(".stroke__right");
const center = document.querySelector(".stroke__center");
const historyModal = document.querySelector("#history-modal");

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

let isActive = false;

function animate() {
  if (!isActive) {
    isActive = true;
    addAnimations();

    setTimeout(() => {
      addCompletedState();
      removeAnimations();
    }, 400);
  } else {
    
    addReverseAnimations();
    setTimeout(() => {
      removeCompletedState();
      removeReverseAnimations();
      isActive = false;
    }, 400);
  }
}

document.querySelector(".history-modal-btn").addEventListener("click", openHistoryModal);

function openHistoryModal() {

  animate();

  let isModalOpen = false;

  if(!isModalOpen) {
    historyModal.classList.toggle("history-modal-active");
    // isModalOpen = true;
  } 
}