<template>
<!-- new -->
    <div>
    <div class="login-form">
    <form class="formstyle">
        <h2 class="text-center">Sign in</h2>       
        <div class="form-group">
            <label for="loginemail">Email address</label>
            <input class="form-control" id="loginemail" placeholder="name@example.com" v-model="form.email">
        </div>
        <div class="form-group">
            <label for="loginpass">Password</label>
            <input class="form-control" id="loginpass" placeholder="password" v-model="form.password">
        </div>
        <div class="form-group">
            <button type="button" class="btn btn-outline-light" v-on:click="onSubmit()">Sign-in</button>
        </div>
        <div class="clearfix">
            <a href="#" class="pull-right white-link">Forgot Password?</a>
        </div>        
    </form>
    <p class="text-center"><a href="/register" class="black-link">Create an Account</a></p>
</div>
</div>
  
  
</template>
<style scoped>
.formstyle{
    color: #ffffff;
    background-color: #c65353;
}
.login-form {
    width: 340px;
    margin: 50px auto;
    
}
.login-form form {
    margin-bottom: 15px;
    
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;
}
.login-form h2 {
    margin: 0 0 15px;
}
.form-control{
    min-height: 38px;
    border-radius: 2px;
    
}
.white-link{
    color:#ffffff
}
.black-link{
    color:black;
}
</style>
<script>
import axios from 'axios'
export default {
    name : 'login',
    data(){
        return{
            form:{
                email: '',
                password: '',
            }
        }
    },
    methods: {
      onSubmit() {
        
         axios.post('https://api.yacs.maoyu.wang/sessions', {
	"email" : this.form.email,
	"password" : this.form.password
  })
  .then(function (response) {
      console.log(response)
  })
  .catch(function (error) {
  
  });
      }
    }

}
</script>