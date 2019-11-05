<template>

<div class="w-100 formwrapper">
     
        <form class="p-5 mt-5 mb-5">
            <h2 class="float-left">Sign in</h2>   
            <div class="form-group">
                <input class="form-control" id="registrationemail" placeholder="email" v-model="form.name">
            </div>
            <div class="form-group">
                <input class="form-control" id="registrationname" placeholder="name" v-model="form.email">
            </div>
            <div class="form-group">
                <input class="form-control" id="registrationpass" placeholder="password" v-model="form.password">
            </div>
            <div class="form-group">
                <input class="form-control" id="confirm-registrationpass" placeholder="confirm password" v-model="form.passwordconfirm">
            </div>
           
            <div class="form-group">
                <input class="form-control" id="registrationmajor" placeholder="major" v-model="form.major">
            </div>
            <div class="form-group">
                <input class="form-control" id="registrationdegree" placeholder="degree" v-model="form.degree">
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary float-left" v-on:click="onSubmit()">Register</button>
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
<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'
export default {
    name : 'register',
    data(){
        return{
            err: '',
            popup: '',
            form:{
                name: '',
                email: '',
                password: '',
                passwordconfirm: '',
                major: '',
                degree: ''
            }
        }
    },
    methods: {
        login(){
            axios.post('http://api.yacs.maoyu.wang/sessions', {
                "email" : this.form.email,
                "password" : this.form.password
            })
            .then(
                response => {
                
            if (response.data.success) {
                    let session_id = response.data.content.sessionID;
                    VueCookies.set('session-id',session_id);
                    console.log("logged in after registration");
            }else{
                console.log("failed to log in after registration");
            }
                
                
                }
            )
            .catch(function (error) {
                console.log(error)
            });
        },

        async register(){
            await axios.post('http://api.yacs.maoyu.wang/users', {
                "name" : this.form.name,
                "email" : this.form.email,
                "phone" : this.form.password,
                "password" : this.form.major,
                "major" : this.form.major,
                "degree" : this.form.degree
            })
            .then(response => {
                if (response.data.success) {
                    this.err = "";
                    this.popup = "Success!";
                }else{
                    this.err = response.data.errMsg;
                    this.popup = "";
                }   
            })
            .catch(function (error) {
                console.log(error)
            });
        },


        onSubmit() {
            this.register().then(this.login());     
      }
    }
}
</script>