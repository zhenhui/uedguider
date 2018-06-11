<template>
  <div class="theme-container">
    <div class="content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
    </div>
  </div>
</template>

<script>
const msgs = [
  `这里什么都没有`,
  `你怎么到这里来了?`,
  `这是一个 Four-Oh-Four.`,
  `看起来有些链接失效了`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
