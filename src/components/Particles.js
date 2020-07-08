
import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
  >

<Particles className="particles"
height = '100%'
params= {{
    particles: {
        number: { value: 9, density: { enable: true, value_area: 800 } },
        color: { value: "#808080" },
        shape: {
          type: "polygon",
          stroke: { width: 1, color: "#000" },
          polygon: { nb_sides: 9 },
          image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
          value: .2,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 9,
          random: true,
          anim: { enable: true, speed: 10, size_min: 40, sync: false }
        },
        line_linked: {
          enable: false,
          distance: 176.26369048095953,
          color: "#ffffff",
          opacity: 1,
          width: 2
        },
        move: {
          enable: true,
          speed: 6.409588744762165,
          direction: "top",
          random: true,
          straight: true,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 560.8390151666895 }
        }
      },
      retina_detect: true
}}
/>
</div>
);