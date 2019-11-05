<template>
    <div class="w-100 formwrapper">
        <form class="p-5 mt-5 mb-5">
            <h2 class="float-left">Sign in</h2><br>       
            <div class="form-group">
                <input class="form-control" id="loginemail" placeholder="email" v-model="form.email">
            </div>
            <div class="form-group">
                <input class="form-control" id="loginpass" placeholder="password" v-model="form.password">
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary float-left" v-on:click="onSubmit()">Sign-in</button>
                <button type="button" to="#" class="btn btn-info"><router-link tag="div" to="/register">Forgot Password</router-link></button>
                <button type="button" to="/register" class="btn btn-success float-right"><router-link tag="div" to="/register">Create an Account</router-link></button>

            </div>
            
            
            
        </form>
        
        <transition name = "bounce">
            <div class="alert alert-danger" v-show="err" role="alert">
                    {{err}}
            </div>
        </transition>
            <transition name = "bounce">
            <div class="alert alert-success" v-show="popup" role="alert">
                    {{popup}}
            </div>
        </transition>
        
    </div>
    
</template>
<style scoped>
.bounce-enter-active {
  animation: bounce-in .2s;
}
.bounce-leave-active {
  animation: bounce-in .05s reverse;
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
<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'

export default {
    name : 'login',
    data(){
        return{
            server_response: null,
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
                this.server_response = response;
        if (this.server_response.data.success) {
                let session_id = this.server_response.data.content.sessionID;
                VueCookies.set('session-id',session_id);
                this.err = "";
                this.popup = "Success!";
        }else{
            this.err = this.server_response.data.errMsg;
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