<style>

</style>
<template>
  <div id="app">
    <!-- Header -->
    <div class="header-container">
      <nav class="navbar navbar-custom navbar-expand-sm flex-wrap2 flex-md-nowrap p-0">
        <div class="container">
          <a class="navbar-brand col-auto mr-0" href="https://yacs.cs.rpi.edu/"><img class="theme-logo" src="./assets/yacs-symbol-lockup-white.png"></a>
          
        </div>
        
            
        
      </nav>
    </div>
    <!-- Sidebar -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  
}
</script>

<style>
#app {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.theme-logo{
    height: 39px;
}
.navbar-custom{
  background-color: #c65353;
}
</style>
