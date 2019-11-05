<style>

</style>
<template>  

  <div id="app">
    <!-- header -->
    <b-navbar class="p-0 navbar-custom">
    <div class="container">
    <a class="navbar-brand col-auto" href="https://yacs.cs.rpi.edu/"><img class="theme-logo" src="./assets/yacs-symbol-lockup-white.png"></a>
    </div>
    </b-navbar>
    <!-- end header -->
    <!-- navbar -->
    
    <b-container fluid class="h-100">
      <div v-if="loggedin">
      <b-row class = "justify-content-center">
        <b-col cols="1">
          <div class="navpill" id="navpill-1">
          <router-link><p>Browsing History</p></router-link>
          </div>
        </b-col>
        <b-col cols="1">
          <div class="navpill" id="navpill-2">
          <router-link>Browsing History</router-link>
          </div>
        </b-col>
        <b-col cols="1">
          <div class="navpill" id="navpill-3">
          <router-link>Account Setting</router-link>
          </div>
        </b-col>
        <b-col cols="1">
          <div class="navpill" id="navpill-4">
          <router-link>Notification</router-link>
          </div>
        </b-col>
        <b-col cols="1">
          <div class="navpill" id="navpill-5">
          <router-link>Watch List</router-link>
          </div>
        </b-col>
      </b-row>
      </div>
      <b-row class="justify-content-center">
        <router-view>
        </router-view>
      </b-row>
    </b-container>
    
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      loggedin: false
    }
  }
  
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
.navpill{
height:50px;
border-radius: 25px;
margin-top: 20px
}
#navpill-1{
  background: #6a89cc;
}
#navpill-2{
  background: #4a69bd;
}
#navpill-3{
  background: #1e3799;
}
#navpill-4{
  background: #0a3d62;
}
#navpill-5{
  background: #0c2461;
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
    box-shadow: 3px 3px 1px 0px #e3f2fd;
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
.bounce-enter-active {
  animation: bounce-in .2s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.formwrapper{
    max-width: 500px;
}
.formwrapper form{
    border-radius: 4px;
}
</style>
