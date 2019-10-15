<template>
    <div class="container">

        <div class="form-group">
          <div class="row justify-content-center justify-content-center">
            <div class="col-sm-4">
              <label for="registrationemail">Email address</label>
              <input type="email" class="form-control" id="registrationemail" placeholder="name@example.com" v-model="form.email">
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-sm-4">
              <label for="registrationname">Name</label>
              <input class="form-control" id="registrationname" placeholder="name" v-model="form.name">
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-sm-4">
              <label for="registrationpass">Password</label>
              <input type="password" class="form-control" id="registrationpass" placeholder="password" v-model="form.password">
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-sm-4">
              <label for="registrationmajor">Major</label>
              <input class="form-control" id="registrationmajor" placeholder="major" v-model="form.major">
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-sm-4">
              <label for="registrationdegree">Degree</label>
              <input class="form-control" id="registrationdegree" placeholder="degree" v-model="form.degree">
              <b-button class = "mt-3" type="submit" variant="primary" v-on:click="onSubmit()">Submit</b-button>
            </div>
          </div>
    </div>
    
    
  </div>
</template>
<script>
import axios from 'axios'
export default {
    name : 'register',
    data(){
        return{
            form:{
                name: '',
                email: '',
                password: '',
                major: '',
                degree: ''
            }
        }
    },
    methods: {
      onSubmit() {
        
         axios.post('https://api.yacs.maoyu.wang/users', {
    "name" : this.form.name,
	"email" : this.form.email,
	"phone" : this.form.password,
	"password" : this.form.major,
	"major" : this.form.major,
	"degree" : this.form.degree
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