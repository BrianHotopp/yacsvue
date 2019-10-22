<template>
    <div class="w-100" style="max-width: 500px">
      <form class="mb-5 p-5 mt-5">
          <h2 class="text-center">Register</h2>       
          <div class="form-group">
              <label for="registrationemail">Email address</label>
              <input class="form-control" id="registrationemail" placeholder="email" v-model="form.email">
          </div>
          <div class="form-group">
              <label for="registrationname">Name</label>
              <input class="form-control" id="registrationname" placeholder="name" v-model="form.name">
          </div>
          <div class="form-group">
              <label for="registrationpass">Password</label>
              <input type="password" class="form-control" id="registrationpass" placeholder="password" v-model="form.password">
          </div>
          <div class="form-group">
              <label for="registrationmajor">Major</label>
              <input class="form-control" id="registrationmajor" placeholder="major" v-model="form.major">
          </div>
          <div class="form-group">
              <label for="registrationdegree">Degree</label>
              <input class="form-control" id="registrationdegree" placeholder="degree" v-model="form.degree">
          </div>
          <div class="form-group">
              <button type="button" class="btn btn-outline-light" v-on:click="onSubmit()">Register</button>
          </div> 
      </form>  
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