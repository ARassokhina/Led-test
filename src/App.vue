<template>
  <div id="canvas-app">
    <Canvas></Canvas>
  </div>
</template>

<script>
import Canvas from "./components/Canvas.vue";

export default {
  name: "App",
  components: {
    Canvas,
  },
};
</script>


<style lang="scss">
#canvas-app {
  .input {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-left: 40px;
    text-align: center;
  }

  .label {
    text-align: center;
    padding-bottom: 2px;
  }

  input {
    font-size: 11px;
    margin-bottom: 16px;
  }
  .wrapper {
    display: flex;
    margin-left: 40px;
    margin-top: 40px;
  }
  canvas {
    border: 1px solid black;
  }
}
</style>
