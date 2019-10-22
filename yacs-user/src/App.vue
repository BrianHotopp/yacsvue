<style>

</style>
<template>
  <div id="app">
    <b-navbar class="p-0 navbar-custom">
    <div class="container">
    <a class="navbar-brand col-auto" href="https://yacs.cs.rpi.edu/"><img class="theme-logo" src="./assets/yacs-symbol-lockup-white.png"></a>
    </div>
    </b-navbar>
    <!-- rewrite sidebar -->
    <b-container>
      <b-row>
        <b-col md="2" id="sidebar">
            <b-nav vertical>
            <b-nav-item class="navitem"><router-link class="white-link" to="#">Login</router-link></b-nav-item>
            <b-nav-item class="navitem"><router-link class="white-link" to="#">Browsing History</router-link></b-nav-item>
            <b-nav-item class="navitem"><router-link class="white-link" to="#">Notifications</router-link></b-nav-item>
            <b-nav-item class="navitem"><router-link class="white-link" to="#">Watch List</router-link></b-nav-item>
            </b-nav>
        </b-col>
        <b-col md="8" class="mt-5">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
    <!-- Sidebar -->
    
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
  min-height: 100%;
}

.white-link{
    color:#ffffff
}
.black-link{
    color:black;
}
.theme-logo{
    height: 39px;
}
.navbar-custom{
  background-color: #c65353;
}
#sidebar{
    background-color: #c65353;
    color: #ffffff;
}
</style>
