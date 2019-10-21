<template>
    <div>
        <div class="col mt-5">
            <div class="login-form"  style="max-width: 400px;">
                <form class="mb-4 p-4">
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
                        <a href="#" class="pull-right white-link">Forgot Password?</a>
                </form>
                <p class="text-center"><router-link class="black-link" to="/register">Create an Account</router-link></p> 
            </div>
        </div>
    </div>
</template>
<style scoped>


.login-form form {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    color: #ffffff;
    background-color: #c65353;
}
.login-form h2 {
    margin: 0 0 15px;
}
.form-control{
    min-height: 38px;
    border-radius: 2px;
    
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