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
    <div class="container ml-0">
      <div class = "row">
          <div class="col-md-2" id="sidebar">
              <ul class="nav flex-column">
                  <li class="nav-item">
                      <router-link class="nav-link white-link" to="#">Login</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link white-link" to="#">Browsing History</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link white-link" to="#">Notifications</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link white-link" to="#">Watch List</router-link>
                  </li>
              </ul>
          </div>
          <router-view></router-view>
      </div>
    </div>
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
