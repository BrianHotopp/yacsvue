<template>
    <div class="w-100 formwrapper">
        <form class="p-5 mt-5 mb-5">
            <h2 class="float-left">Sign in</h2>   
            <div class="form-group">
                <input class="form-control" placeholder="email" v-model="form.email">
            </div>
            <div class="form-group">
                <input class="form-control" placeholder="password" v-model="form.password">
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary float-left" v-on:click="onSubmit()">Sign-in</button>
                <button type="button" to="#" class="btn btn-info"><router-link tag="div" to="/register">Forgot Password</router-link></button>
                <button type="button" to="/register" class="btn btn-success float-right"><router-link tag="div" to="/register">Create an Account</router-link></button>

            </div>
            
            
            
        </form>
        
        <transition name = "bounce">
            <div class="alert alert-danger" v-if="err" role="alert">
                    {{err}}
            </div>
        </transition>
            <transition name = "bounce">
            <div class="alert alert-success" v-if="popup" role="alert">
                    {{popup}}
            </div>
        </transition>

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
            err: '',
            popup: '',
            form:{
                email: '',
                password: '',
            },
        }
    },
    methods: {
      onSubmit() {
        axios.post('http://api.yacs.maoyu.wang/sessions', {
            "email" : this.form.email,
            "password" : this.form.password
        })
        .then(
            response => {
              
        if (response.data.success) {
                let session_id = response.data.content.sessionID;
                VueCookies.set('session-id',session_id);
                this.err = "";
                this.popup = "Success!";
        }else{
            this.err = response.data.errMsg;
            this.popup = "";
        }
            
            
            }
        )
        .catch(function (error) {
            console.log(error)
        });
        
      }
    }
}
</script>