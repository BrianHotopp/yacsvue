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
    <b-container fluid class="h-100">
      <b-row class="h-100">
        <b-col lg="1" id="sidebar">
            <b-nav vertical>
            <b-nav-item class="navitem"><router-link class="white-link" to="/login">Login</router-link></b-nav-item>
            <b-nav-item class="navitem"><router-link class="white-link" to="#">Browsing History</router-link></b-nav-item>
            <b-nav-item class="navitem"><router-link class="white-link" to="#">Notifications</router-link></b-nav-item>
            <b-nav-item class="navitem"><router-link class="white-link" to="#">Watch List</router-link></b-nav-item>
            </b-nav>
        </b-col>
        <b-col lg="10" class="d-flex justify-content-center">
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
  
}
html, body, #app{
  height: 100%;
  min-height: 100%;
}
.white-link{
    color:#ffffff
}
.white-link:hover{
  color: white;
}
.black-link{
    color:black;
}
.black-link:hover{
  color: black;
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
form {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    color: #ffffff;
    background-color: #c65353;
}
.form h2 {
    margin: 0 0 15px;
}
.form-control{
    min-height: 38px;
    border-radius: 2px;
}

</style>
