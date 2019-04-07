<template>
  <div class="home">
    <Hello msg="Hello" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    Hello: HelloWorld
  }
}
</script>
