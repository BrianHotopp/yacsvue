<template>
    <div class="container">
        <div class="form-group">

        <label for="registrationinputemaill">Email address</label>
        <input type="email" class="form-control" id="registrationinputemail" placeholder="name@example.com" v-model="form.email">

        <label for="registrationinputname">Name</label>
        <input class="form-control" id="registrationinputname" placeholder="name" v-model="form.name">

        <label for="registrationpass">Password</label>
        <input type="password" class="form-control" id="registrationpass" placeholder="password" v-model="form.password">

        <label for="registrationmajor">Major</label>
        <input class="form-control" id="registrationmajor" placeholder="major" v-model="form.major">

        <label for="registrationinputname">Degree</label>
        <input class="form-control" id="registrationinputname" placeholder="degree" v-model="form.degree">

    </div>
    <b-button type="submit" variant="primary" v-on:click="onSubmit()">Submit</b-button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    name : "doorman",
    response: null,
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
         axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => (console.log(response)))
         axios.post('https://api.yacs.maoyu.wang/users', {
    "name" : this.form.name,
	"email" : this.form.email,
	"phone" : this.form.password,
	"password" : this.form.major,
	"major" : this.form.major,
	"degree" : this.form.degree
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
      }
    }

}
</script>