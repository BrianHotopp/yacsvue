
<template>
  <div id="app">
  

    <div v-if="loggedin"> 
      <dashboard></dashboard>   
      
    </div>
    <div v-else>
      <doorman></doorman>
    </div>
  </div>
</template>

<script>
import doorman from './components/doorman.vue'
import dashboard from './components/dashboard.vue'
export default {
  name: 'app',
  components: {
    doorman,
    dashboard
  },
  loggedin: false
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
