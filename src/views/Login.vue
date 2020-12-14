<template>
  <div>
    <b-container>
      
      <b-card class="mx-auto mt-4" style="max-width: 25rem;">
        
      <b-form class="mx-auto" style="max-width: 30rem">
        <h1>Login</h1>
        <b-input-group class="mt-5">
          <b-form-input placeholder="Email address" type="email"></b-form-input>
          </b-input-group>
        <b-input-group class="mt-3">
          <b-form-input placeholder="Password" type="password"></b-form-input>
        </b-input-group>

        <b-button variant="primary" class="mt-5">Login</b-button>
      <p class=" mt-5">Don't have an account? Sign Up  <b-link to="/signup">here</b-link>  </p>
     
      </b-form>
      </b-card>
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
</style>