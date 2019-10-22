<template>
    <div class="w-100" style="max-width: 500px">
        <form class="mb-5 p-5 mt-5">
            <h2 class="text-center">Sign in</h2>       
            <div class="form-group">
                <label for="loginemail">Email address</label>
                <input class="form-control" id="loginemail" placeholder="email" v-model="form.email">
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
        
        <p class="text-center">
            <button type="button" class="btn btn-outline-dark"><router-link to="/register">Create an Account</router-link></button>
        </p> 
    </div>
</template>
<style scoped>
.btn a{  
    text-decoration: none;
    color: #324455;

}
.btn a:hover{  
    color:white;

}

</style>
<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'

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
        axios.post('http://api.yacs.maoyu.wang/sessions', {
            "email" : this.form.email,
            "password" : this.form.password
        })
        .then(function (response) {
            let session_id = response.data.content.sessionID
            VueCookies.set('session-id',session_id);
            console.log()
        })
        .catch(function (error) {
            console.log(error)   
        });
      }
    }
}
</script>