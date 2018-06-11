<template lang="pug">
  .app
    h1 测试组件,内部值为 → {{btn}}
</template>
<script>
  export default {
    props: {
      btn: {
        type: String,
        default: '恩呢'
      }
    },
    data(){
      return {
        aa:11
      }
    },
  }
</script>
<style lang="sass" scoped>
h1
  color: rgba(2,29,51,0.30)
  font-weight: 300
</style>
