<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <el-button type="primary" @click="add">ADD</el-button>
    <p>{{ count }} -- {{ cart }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "about",
  data() {
    return {
      msg: "This is an about page"
    };
  },
  computed: {
    ...mapState(["count", "cart"])
  },
  methods: {
    ...mapMutations(["increment"]),
    add() {
      this.$store.dispatch("add", { count: 1 });
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: #f60;
}
</style>