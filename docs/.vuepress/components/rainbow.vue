<template>
  <div>
    <p class="rainbow">
      组件规范
      <span data-text="组件规范"></span>
      <span data-text="组件规范"></span>
      <span data-text="组件规范"></span>
      <span data-text="组件规范"></span>
    </p>
  </div>
</template>
<style>
.rainbow {
	color: transparent;
	font-size: 200px;
	text-transform: uppercase;
	font-family: sans-serif;
	font-weight: bold;
	line-height: 1.2em;
	position: relative;
}

.rainbow span::before,
.rainbow span::after {
	content: attr(data-text);
	position: absolute;
	top: 0;
	left: 0;
	overflow: hidden;
	animation: animate 0.8s infinite alternate;
	filter: opacity(0);
}

.rainbow span:nth-child(1)::before {
	color: orchid;
	z-index: 1;
	height: calc(100% - 10% * 1);
	animation-delay: calc(0.8s - 0.1s * 1);
}

.rainbow span:nth-child(1)::after {
	color: mediumpurple;
	z-index: 2;
	height: calc(100% - 10% * 2);
	animation-delay: calc(0.8s - 0.1s * 2);
}

.rainbow span:nth-child(2)::before {
	color: deepskyblue;
	z-index: 3;
	height: calc(100% - 10% * 3);
	animation-delay: calc(0.8s - 0.1s * 3);
}

.rainbow span:nth-child(2)::after {
	color: cyan;
	z-index: 4;
	height: calc(100% - 10% * 4);
	animation-delay: calc(0.8s - 0.1s * 4);
}

.rainbow span:nth-child(3)::before {
	color: mediumspringgreen;
	z-index: 5;
	height: calc(100% - 10% * 5);
	animation-delay: calc(0.8s - 0.1s * 5);
}

.rainbow span:nth-child(3)::after {
	color: yellow;
	z-index: 6;
	height: calc(100% - 10% * 6);
	animation-delay: calc(0.8s - 0.1s * 6);
}

.rainbow span:nth-child(4)::before {
	color: gold;
	z-index: 7;
	height: calc(100% - 10% * 7);
	animation-delay: calc(0.8s - 0.1s * 7);
}

.rainbow span:nth-child(4)::after {
	color: tomato;
	z-index: 8;
	height: calc(100% - 10% * 8);
	animation-delay: calc(0.8s - 0.1s * 8);
}

@keyframes animate {
	from {
		filter: opacity(0);
	}

	to {
		filter: opacity(1);
	}
}
</style>
