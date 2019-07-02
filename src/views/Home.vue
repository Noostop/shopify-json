<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <input type="text" name="name" v-model="title">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      title: 'Hello Word'
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  $color: red;

  .home {
    color: $color;
  }
</style>
