<template>
    <div class="w-100" style="max-width: 500px">
        <form class="p-5 mt-5">
            <h2 class="float-left">Sign in</h2><br>       
            <div class="form-group">
                <input class="form-control" id="loginemail" placeholder="email" v-model="form.email">
            </div>
            <div class="form-group">
                <input class="form-control" id="loginpass" placeholder="password" v-model="form.password">
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary float-left" v-on:click="onSubmit()">Sign-in</button>
                <button type="button" to="/register" class="btn btn-success float-right"><router-link tag="div" to="/register">Create an Account</router-link></button>
                <button type="button" to="#" class="btn btn-danger"><router-link tag="div" to="/register">Forgot Password</router-link></button>
            </div>
        </form>
        
        
            
    </div>
</template>
<style scoped>


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