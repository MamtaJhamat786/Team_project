<template>
<div>
  <b-navbar toggleable="lg" type="light" id="header">
    <b-navbar-brand href="#">FindUp</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/" >{{ $t('header.home') }}</b-nav-item>
        <b-nav-item :to="`/${$i18n.locale}/about`">{{ $t('header.about') }}</b-nav-item>
      </b-navbar-nav>

      <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
     

       <b-navbar-nav class="ml-auto">
          <b-nav-item :to="`/${$i18n.locale}/login`">{{ $t('header.login') }}</b-nav-item>
          <b-nav-item :to="`/${$i18n.locale}/signup`">{{ $t('header.signup') }}</b-nav-item>
  
        </b-navbar-nav>
          
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item  @click="setLocale('en')">ENG</b-dropdown-item>
          <b-dropdown-item  @click="setLocale('et')">EST</b-dropdown-item>
        </b-nav-item-dropdown>

        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  },
  methods: {
    setLocale(locale) {
            this.$i18n.locale = locale;
            this.$router.push({
                params: {
                    lang: locale
                }
            }, () => {});
            localStorage.setItem('lang', this.$i18n.locale)
        },
        computed: {
            filteredgames: function() {

                var games = [];

                for(var i in this.games) {

                    var game = this.games[i];

                    if(game.heading.indexOf(this.keyword) !== -1 ||
                        game.text.indexOf(this.keyword) !== -1) {
                        games.push(game);

                    }
                }
                return games;

            }
        }

  }
}
</script>

<style>
#header{
  background-color:cornflowerblue;
}

</style>
