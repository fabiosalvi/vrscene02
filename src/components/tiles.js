AFRAME.registerComponent("tiles", {
  init: function() {
    size = 20;
    centered = size / 2;
    for (i = 0; i < size; i++) {
      for (j = 0; j < size; j++) {
        box = document.createElement("a-box");
        x = i - centered + 0.5;
        y = j - centered + 0.5;
        position = x + " -10 " + y;

        //create animation
        animation = document.createElement("a-animation");
        animation.setAttribute("attribute", "position");
        animation.setAttribute("to", x + " 0 " + y);
        animation.setAttribute("easing", "ease");
        animation.setAttribute("delay", (i - 10) * (j - 10) * 10);
        animation.setAttribute("direction", "normal");
        animation.setAttribute("dur", 6000);
        animation.setAttribute("repeat", 0);

        //box.setAttribute("color", (i + j) % 2 ? "darkgray" : "gray");
        box.setAttribute("color", (i + j) % 2 ? "#b34093" : "#c050a2");
        box.setAttribute("position", position);
        box.setAttribute("height", "0.05");

        this.el.appendChild(box);
        box.appendChild(animation);
      }
    }
  },
});
