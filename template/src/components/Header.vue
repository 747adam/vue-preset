<template>
  <header>
    <h1>{{ name }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  h1 {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }
}
</style>
