function requireAll(req) {
  req.keys().forEach(req);
}

// Require all components.
requireAll(require.context("./components/", true, /\.js$/));

require("aframe-particle-system-component");
//require("aframe-environment-component");
//require("aframe-animation-component");
require("aframe-curve-component");
require("aframe-alongpath-component");
require("./scene.html");
