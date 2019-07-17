
class DragNDropElement {
  constructor(element, targetClass) {
    this.element = element;
    this.targetClass = targetClass;

    this.draggingHandler(this.element, this.targetClass);
  }

  draggingHandler(app, targetClass) {
    // set default coords when we clicked first time
    const setDefaultPosition = (event, element, callback) => {
      if (element.style.position !== "absolute") {
        element.style.position = "absolute";
        element.style.zIndex = 3;
        element.addEventListener("dragstart", e => e.preventDefault());
      }
      document.body.append(element);
      element.classList.add("no-transition");
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
      if (!e.target.classList.contains(targetClass)) {
        return;
      }

      const coords = getCoords(app);
      const shiftX = e.pageX - coords.left;
      const shiftY = e.pageY - coords.top;

      const moveAt = e => {
        app.style.top = `${e.pageY - shiftY}px`;
        app.style.left = `${e.pageX - shiftX}px`;
      };

      setDefaultPosition(e, app, moveAt);
      document.addEventListener("mousemove", moveAt);

      app.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", moveAt);
        app.classList.remove("no-transition");
      });
    };

    app.addEventListener("mousedown", startDragging);
  }
}

new DragNDropElement(historyModal, "drag-row");

new DragNDropElement(document.querySelector(".converting-block"), "converting-block-body_output")