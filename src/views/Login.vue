<template>
  <div class="LoginImage">
    <b-container>
      <div class="pt-5">
  
      <b-card class="mx-auto mt-4" style="max-width: 25rem;">
        
      <b-form class="mx-auto" style="max-width: 30rem">
        <h1>{{ $t('header.login') }}</h1>
        <b-alert :show="wrong" variant="danger">Enter valid password and email</b-alert>
        <b-input-group class="mt-5">
          <b-form-input :placeholder="$t('placeholder.email')" type="email" v-model="form.email"></b-form-input>
          </b-input-group>
        <b-input-group class="mt-4">
          <b-form-input :placeholder="$t('placeholder.password')" type="password" v-model="form.password" autocomplete="on"></b-form-input>
        </b-input-group>

        <b-button variant="primary" class="mt-5" @click="submit()">Login</b-button>
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
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push(
        {
          params: {
            lang: locale,
          },
        },
        () => {}
      );
    },
    submit() {
      const formData = {
        email: this.form.email,
        password: this.form.password
      }
         this.$store.dispatch('login', {email: formData.email, password: formData.password})
    }
  },
  computed: {
  wrong() {
    return this.$store.getters.error
  }
}
    
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