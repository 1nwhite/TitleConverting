
// set default coords when we clicked first time
const setDefaultPosition = (event, element, callback) => {
  if (element.style.position !== "absolute") {
    element.style.position = "absolute";
    element.style.zIndex = 1000;
    element.addEventListener("dragstart", e => e.preventDefault());
  }
  element.classList.add("no-transition");
  document.body.append(element);
  callback(event);
};

// get elemts coordinates (top, left regarding document.body; element => app)
const getCoords = element => {
  const { top, left } = element.getBoundingClientRect();
  return {
    top: pageYOffset + top,
    left: pageXOffset + left
  };
};

// main function
const startDragging = e => {
  if (!e.target.classList.contains("drag-row")) {
    return;
  }

  const coords = getCoords(historyModal);
  const shiftX = e.pageX - coords.left;
  const shiftY = e.pageY - coords.top;

  const moveAt = e => {
    historyModal.style.top = `${e.pageY - shiftY}px`;
    historyModal.style.left = `${e.pageX - shiftX}px`;
  };

  setDefaultPosition(e, historyModal, moveAt);
  document.addEventListener("mousemove", moveAt);

  historyModal.addEventListener("mouseup", () => {
    historyModal.classList.remove("no-transition");
    document.removeEventListener("mousemove", moveAt);
  });
};

historyModal.addEventListener("mousedown", startDragging);