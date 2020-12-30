<template>
  <div class="vh-100 d-flex justify-content-center align-items-center">
      <p v-for="(item, index) in data" :key="index" > {{ item.email }}, {{ item.name }}</p>
  </div>
</template>

<script>
export default {
    computed: {
        data() {
            return this.$store.getters.data
        }
    },
    created () {
        this.$store.dispatch('fetchData')
    }
}
</script>

<style>

</style>