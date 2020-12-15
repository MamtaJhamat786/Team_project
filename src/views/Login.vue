<template>
  <div class="LoginImage">
    <b-container>
      <div class="pt-5">
  
      <b-card class="mx-auto mt-4" style="max-width: 25rem;">
        
      <b-form class="mx-auto" style="max-width: 30rem">
        <h1>Login</h1>
        <b-input-group class="mt-5">
          <b-form-input placeholder="Email address" type="email"></b-form-input>
          </b-input-group>
        <b-input-group class="mt-4">
          <b-form-input placeholder="Password" type="password"></b-form-input>
        </b-input-group>

        <b-button variant="primary" class="mt-5">Login</b-button>
      <p class=" mt-5">Don't have an account? Sign Up  <b-link to="/signup">here</b-link>  </p>
     
      </b-form>
      </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return{
      form: {
        email: '',
        password:''
      } 
    }
  },
  methods: {
    
  },
}
</script>

<style>
 .LoginImage {
  background-image: url("https://rmofstclements.com/wp-content/uploads/2019/04/Badminton-Background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  background-position: center;
}
</style>