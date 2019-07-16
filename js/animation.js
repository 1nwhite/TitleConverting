const left = document.querySelector(".stroke__left");
const right = document.querySelector(".stroke__right");
const center = document.querySelector(".stroke__center");
const historyModal = document.querySelector("#history-modal");
const historyModalList = document.querySelector(".history-modal_list");

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
  historyModal.classList.toggle("history-modal-active");
}

let historyData = [
  {
    title: "10 Best Beaches In ",
    text: "10-best-beaches-in-netherlands-to-go-crazy-wild",
  },
  {
    title: "10 Best Beaches In",
    text: "10-best-beaches-in-netherlands-to-go-crazy-wild",
  },
  {
    title: "10 Best Beaches In",
    text: "10-best-beaches-in-netherlands-to-go-crazy-wild",
  },
  {
    title: "10 Best Beaches In",
    text: "10-best-beaches-in-netherlands-to-go-crazy-wild",
  },
  {
    title: "10 Best Beaches In",
    text: "10-best-beaches-in-netherlands-to-go-crazy-wild",
  },
  {
    title: "10 Best Beaches In",
    text: "10-best-beaches-in-netherlands-to-go-crazy-wild",
  },
  {
    title: "10 Best Beaches In",
    text: "10-best-beaches-in-netherlands-to-go-crazy-wild",
  },
  {
    title: "10 Best Beaches In",
    text: "10-best-beaches-in-netherlands-to-go-crazy-wild",
  },

]

function createHistoryItem({title, text}) {

  console.log(title);

  const li = document.createElement("li");

  li.classList.add("history-modal_row")
  li.innerHTML = ` 
   <h4 class="history-modal_insert-title">${title}</h4>
    <p class="history-modal_copy-title">${text}</p>
    <button class="history-modal_copy-btn "></button>
  `

  return li;
}

// historyModalList

historyData.map(function(data) {
  historyModalList.append(createHistoryItem(data));

  // console.log(data);
})


console.log(historyModalList);