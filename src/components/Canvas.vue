<template>
  <div class="wrapper">
    <canvas
      id="canvas"
      width="800"
      height="500"
      @mousemove="mouseMove"
      @mouseleave="mouseLeave"
      @mousedown="mouseDown"
      @mouseup="mouseUp"
    ></canvas>
    <div class="input">
      <p class="label">Top</p>
      <input
        type="number"
        min="0"
        oninput="validity.valid||(value='');"
        v-model.number="startX"
      />
      <span class="label">Left</span>
      <input
        type="number"
        min="0"
        oninput="validity.valid||(value='');"
        v-model.number="startY"
      />
      <span class="label">Height</span>
      <input
        type="number"
        min="0"
        oninput="validity.valid||(value='');"
        v-model.number="w"
      />
      <span class="label">Width</span>
      <input
        type="number"
        min="0"
        oninput="validity.valid||(value='');"
        v-model.number="h"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Canvas",
  data() {
    return {
      vueCanvas: null,
      closeEnough: 20,
      handleWidth: 20,
      handleHeight: 10,
      dragL: false,
      dragC: false,
      dragT: false,
      dragB: false,
      dragR: false,
      cw: null,
      ch: null,
      canvas: null,
      startX: 50,
      startY: 50,
      w: 163,
      h: 108,
    };
  },
  mounted() {
    var canvas = document.getElementById("canvas");
    this.canvas = canvas;
    this.cw = canvas.width;
    this.ch = canvas.height;
    var ctx = canvas.getContext("2d");
    this.vueCanvas = ctx;
    console.log(this.startX);
  },
  methods: {
    //1
    mouseDown(e) {
      var centerHandleSide = Math.min(this.handleWidth, this.handleHeight);
      var mouseX = e.pageX - this.canvas.offsetLeft;
      var mouseY = e.pageY - this.canvas.offsetTop;

      if (this.w === undefined) {
        this.startX = mouseY;
        this.startY = mouseX;
        this.dragR = true;
      } else if (
        Math.abs(mouseX - (this.startX + this.w / 2)) < this.closeEnough &&
        Math.abs(mouseY - this.startY) < this.closeEnough
      ) {
        this.dragT = true;
      } else if (
        Math.abs(mouseX - (this.startX + this.w)) < this.closeEnough &&
        Math.abs(mouseY - (this.startY + this.h / 2)) < this.closeEnough
      ) {
        this.dragR = true;
      } else if (
        Math.abs(mouseX - this.startX) < this.closeEnough &&
        Math.abs(mouseY - (this.startY + this.h / 2)) < this.closeEnough
      ) {
        this.dragL = true;
      } else if (
        Math.abs(mouseX - (this.startX + this.w / 2)) < this.closeEnough &&
        Math.abs(mouseY - (this.startY + this.h)) < this.closeEnough
      ) {
        this.dragB = true;
      } else if (
        Math.abs(mouseX - (this.startX + this.w / 2)) < this.closeEnough &&
        Math.abs(mouseY - (this.startY + this.h / 2)) < this.closeEnough
      ) {
        this.dragC = true;
      } else {
        // handle not resizing
      }
      if (this.startX + this.w <= this.cw && this.startY + this.h <= this.ch) {
        this.vueCanvas.clearRect(0, 0, this.cw, this.ch);
        this.vueCanvas.fillStyle = "#80ffd5";
        this.vueCanvas.fillRect(this.startX, this.startY, this.w, this.h);
        this.vueCanvas.fillStyle = "#FF0000";
        this.vueCanvas.beginPath();
        this.vueCanvas.fillRect(
          this.startX - 5,
          this.startY + this.h / 2 - 10,
          this.handleHeight,
          this.handleWidth
        );
        this.vueCanvas.fill();
        this.vueCanvas.fillStyle = "#FF0000";
        this.vueCanvas.beginPath();
        this.vueCanvas.fillRect(
          this.startX + this.w - this.handleHeight / 2,
          this.startY + Math.ceil(this.h / 2) - this.handleWidth / 2,
          this.handleHeight,
          this.handleWidth
        );
        this.vueCanvas.fill();
        this.vueCanvas.fillStyle = "#FF0000";
        this.vueCanvas.beginPath();
        this.vueCanvas.fillRect(
          this.startX + Math.ceil(this.w / 2) - this.handleWidth / 2,
          this.startY - this.handleHeight / 2,
          this.handleWidth,
          this.handleHeight
        );
        this.vueCanvas.fill();
        this.vueCanvas.fillStyle = "#FF0000";
        this.vueCanvas.beginPath();
        this.vueCanvas.fillRect(
          this.startX + Math.ceil(this.w / 2) - this.handleWidth / 2,
          this.startY + this.h - this.handleHeight / 2,
          this.handleWidth,
          this.handleHeight
        );
        this.vueCanvas.fill();
        this.vueCanvas.fillStyle = "#FF0000";
        this.vueCanvas.beginPath();
        this.vueCanvas.fillRect(
          this.startX + Math.ceil(this.w / 2) - centerHandleSide / 2,
          this.startY + Math.ceil(this.h / 2) - centerHandleSide / 2,
          centerHandleSide,
          centerHandleSide
        );
        this.vueCanvas.fill();
      } else {
        alert("Введенные значения некорректны!");
        this.startX = 50;
        this.startY = 50;
        this.w = 163;
        this.h = 108;
      }
    },
    //2
    mouseUp() {
      this.dragT = this.dragR = this.dragB = this.dragL = this.dragC = false;
    },
    //3
    mouseLeave() {
      this.dragT = this.dragR = this.dragB = this.dragL = this.dragC = false;
    },
    //4
    mouseMove(e) {
      var centerHandleSide = Math.min(this.handleWidth, this.handleHeight);
      var mouseX = e.pageX - this.canvas.offsetLeft;
      var mouseY = e.pageY - this.canvas.offsetTop;

      if (this.dragT) {
        this.h += this.startY - Math.min(mouseY, this.startY + this.h);
        this.startY = Math.min(mouseY, this.startY + this.h);
      } else if (this.dragR) {
        this.w += Math.max(mouseX - this.startX, 0) - this.w;
      } else if (this.dragB) {
        this.h += Math.max(mouseY - this.startY, 0) - this.h;
      } else if (this.dragL) {
        this.w += -Math.min(mouseX, this.startX + this.w) + this.startX;
        this.startX = Math.min(mouseX, this.startX + this.w);
      } else if (this.dragC) {
        if (
          mouseX + Math.ceil(this.w / 2) < this.cw &&
          mouseX - Math.ceil(this.w / 2) > 0 &&
          mouseY + Math.ceil(this.h / 2) < this.ch &&
          mouseY - Math.ceil(this.h / 2) > 0
        ) {
          this.startX += mouseX - this.startX - Math.ceil(this.w / 2);
          this.startY += mouseY - this.startY - Math.ceil(this.h / 2);
        }
      } else {
        // handle not resizing
      }
      if (this.startX + this.w <= this.cw && this.startY + this.h <= this.ch) {
        this.vueCanvas.clearRect(0, 0, this.cw, this.ch);
        this.vueCanvas.fillStyle = "#80ffd5";

        this.vueCanvas.fillRect(this.startX, this.startY, this.w, this.h);
        //left handle
        this.vueCanvas.fillStyle = "#FF0000";
        this.vueCanvas.beginPath();
        this.vueCanvas.fillRect(
          this.startX - this.handleHeight / 2,
          this.startY + Math.ceil(this.h / 2) - this.handleWidth / 2,
          this.handleHeight,
          this.handleWidth
        );
        this.vueCanvas.fill();
        //right handle
        this.vueCanvas.fillStyle = "#FF0000";
        this.vueCanvas.beginPath();
        this.vueCanvas.fillRect(
          this.startX + this.w - this.handleHeight / 2,
          this.startY + Math.ceil(this.h / 2) - this.handleWidth / 2,
          this.handleHeight,
          this.handleWidth
        );
        this.vueCanvas.fill();
        //top handle
        this.vueCanvas.fillStyle = "#FF0000";
        this.vueCanvas.beginPath();
        this.vueCanvas.fillRect(
          this.startX + Math.ceil(this.w / 2) - this.handleWidth / 2,
          this.startY - this.handleHeight / 2,
          this.handleWidth,
          this.handleHeight
        );
        this.vueCanvas.fill();
        //bottom handle
        this.vueCanvas.fillStyle = "#FF0000";
        this.vueCanvas.beginPath();
        this.vueCanvas.fillRect(
          this.startX + Math.ceil(this.w / 2) - this.handleWidth / 2,
          this.startY + this.h - this.handleHeight / 2,
          this.handleWidth,
          this.handleHeight
        );
        this.vueCanvas.fill();
        //center handle
        this.vueCanvas.fillStyle = "#FF0000";
        this.vueCanvas.beginPath();
        this.vueCanvas.fillRect(
          this.startX + Math.ceil(this.w / 2) - centerHandleSide / 2,
          this.startY + Math.ceil(this.h / 2) - centerHandleSide / 2,
          centerHandleSide,
          centerHandleSide
        );
        this.vueCanvas.fill();
      } else {
        alert("Введенные значения некорректны!");
        this.startX = 50;
        this.startY = 50;
        this.w = 163;
        this.h = 108;
      }
    },
  },
};
</script>