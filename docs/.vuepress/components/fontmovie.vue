<template>
  <div class="container">
  <p>
    <span>小菜UI</span>
    <span>组件</span>
  </p>
  <p>
    <span>组件</span>
    <span>规范</span>
  </p>
  <p>
    <span>规范</span>
    <span>↓</span>
  </p>
</div>
</template>
<style scoped>
  .container p {
    color: white;
    font-size: 80px;
    font-family: sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    height: 1em;
    overflow: hidden;
    position: relative;
    left: -0.8em;
  }

  .container p:nth-child(even) {
    transform: skewY(-30deg) skewX(45deg) scaleY(1.3333);
  }

  .container p:nth-child(odd) {
    transform: skewY(-30deg) scaleY(1.3333);
  }

  .container p:nth-child(2) {
    margin-left: 1.3em;
  }

  .container p:nth-child(3) {
    margin-left: 2.6em;
  }

  .container p span {
    display: block;
    text-align: center;
    line-height: 1em;
    animation: lettering 4s infinite ease-in-out alternate;
  }

  @keyframes lettering {
    to {
        transform: translateY(-100%);
    }
  }
</style>
