<template>
  <div id="app">
    <div class="dd">
     <h1>Host Name using component host_name variable: {{host_name}}</h1>
    </div>
    <el-button @click.native="startHacking">Let's do it</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      host_name: process.env.VUE_APP_ATG_ROOT_API,
      msg: 'Use Vue 2.0 Today!'
    }
  },

  methods: {
    startHacking() {
      this.$notify({
        title: 'It Works',
        message:
          "We have laid the groundwork for you. Now it's your time to build something epic!",
        duration: 6000
      })
    }
  }
}
</script>

<style lang="postcss">
body {
  background-color: #f5f5f5;
}
:root h1 {
  --color: red;
  display: flex;
  color: var(--color);
}
</style>
