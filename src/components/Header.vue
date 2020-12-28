<template>
  <div>
    <b-navbar toggleable="lg" type="dark" id="header">

      <b-navbar-brand :to="`/${$i18n.locale}/`">
         <img :src="image" class="logo"/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="`/${$i18n.locale}/`">{{ $t("header.home") }}</b-nav-item>
          <b-nav-item :to="`/${$i18n.locale}/about`">{{
            $t("header.about")
          }}</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-5" placeholder="Search"></b-form-input>
          </b-nav-form>
        

        
            <b-nav-item :to="`/${$i18n.locale}/login`">{{
              $t("header.login")
            }}</b-nav-item>
            <b-nav-item :to="`/${$i18n.locale}/signup`">{{
              $t("header.signup")
            }}</b-nav-item>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item @click="setLocale('en')">ENG</b-dropdown-item>
            <b-dropdown-item @click="setLocale('et')">EST</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import image from "../assets/Logo.jpg"
export default {
  name: "Header",
  data() {
    return {
      image: image
    };
  },
  methods: {
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
      localStorage.setItem("lang", this.$i18n.locale);
    },
  },
};
</script>

<style>
#header {
  background-color: rgb(30, 32, 36);
}
.logo{
   width: 50px;
   position:initial;
   height: 50px;
   
    
}
</style>
