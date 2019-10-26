AFRAME.registerComponent("roll", {
  init: function() {
    this.radius = 2;
    this.circ = Math.PI * (this.radius * 2);
  },

  tick: function(t, dt) {
    this.el.object3D.rotateX(this.circ / 500);
    this.el.object3D.rotateY(this.circ / 500);
  },
});
