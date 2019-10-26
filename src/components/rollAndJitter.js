function nextScene() {
  document.getElementById("env1").setAttribute("visible", "false");
  document.getElementById("env2").setAttribute("visible", "true");
  document.getElementById("tracker").setAttribute("visible", "true");
}

AFRAME.registerComponent("rollandjitter", {
  init: function() {
    // console.log(this.el.getAttribute('radius'));
    this.radius = 3;
    this.circ = Math.PI * (this.radius * 2);
    this.jitter = true;

    this.el.addEventListener("click", e => {
      if (this.el.object3D.position.z >= -3.5) {
        this.jitter = false;
        nextScene();
      }
    });
  },

  tick: function(t, dt) {
    if (this.el.object3D.position.z < -3.5) {
      this.el.object3D.rotateX(this.circ / 500);
      this.el.object3D.position.z += this.circ / 500;

      this.pos = this.el.object3D.position.clone();
    } else {
      if (this.jitter === true) {
        var intensity = 0.02;
        this.el.object3D.position.set(
          this.pos.x + THREE.Math.randFloat(-intensity, intensity),
          this.pos.y + THREE.Math.randFloat(-intensity, intensity),
          this.pos.z
        );
      }
    }
  },
});
