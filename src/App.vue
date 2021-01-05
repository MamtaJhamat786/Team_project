<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    Header
  },
  beforeCreate: function() {
        document.body.className = 'intro';
    },
  created () {
    this.$store.dispatch('autoLogin')
  }
}
</script>

<style lang="scss">
body.about {
    background:rgba(181, 199, 231, 0.849)
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: calc(100vh - 3.5rem) ;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

