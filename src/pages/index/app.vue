<template>
  <div id="app">
    <div class="dd">
      <h1>Host Name using component host_name variable: {{host_name}}</h1>
    </div>
    <el-card class="index-card">
      <div slot="header">
        Multi Pages App Example
      </div>
      <ul>
        <li>
          <a href="/home.html"  target="_self">
            Home HTML
          </a><br>
        </li>   
         <li>
          <a href="/home1.html" target="_self">
            Home1 HTML
          </a>
        </li>          
         <li>
          <a href="/login.html" target="_self">
            Login HTML
          </a>
        </li>  
         <li>
          <a href="/login1.html" target="_self">
            Login1 HTML
          </a>
        </li>       
      </ul>
          
      
    </el-card>
  </div>
</template>

<script>
import modal from '../../components/modal.vue'
export default {
  components: {
    modal
  },
  data() {
    return {
      host_name: process.env.VUE_APP_ATG_ROOT_API,
      msg: 'Use Vue 2.0 Today!'
    }
  }
}


</script>

<style lang="postcss">
.index-card {
  width: 800px;
  margin: 100px auto;
}
li:not(:last-child) {
    margin-bottom: 15px;
}
</style>
