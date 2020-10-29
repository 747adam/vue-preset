<template>
  <div>
    <Header
      :name="name"
    />
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import { ref } from 'vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  setup () {
    const name = ref('web name')
    return {
      name
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
