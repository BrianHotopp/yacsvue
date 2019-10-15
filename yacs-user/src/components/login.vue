<template>
    <div class="container">
        <div class="form-group">
            <div class="row justify-content-center justify-content-center">
                <div class="col-sm-4">
                    <label for="loginemail">Email address</label>
                    <input type="email" class="form-control" id="loginemail" placeholder="name@example.com" v-model="form.email">
                </div>
            </div>
        <div class="row justify-content-center justify-content-center">
            <div class="col-sm-4">
                <label for="loginpass">Password</label>
                <input type="password" class="form-control" id="loginpass" placeholder="password" v-model="form.password">
            </div>
        </div>
    </div>
    <b-button class = "mt-3" type="submit" variant="primary" v-on:click="onSubmit()">Submit</b-button>
  </div>
</template>
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