<template>
  <div class="mt -10 d-flex justify-content-center align-items-center">
    <b-card class="mt-5 ">
    <p v-for="(item, index) in data" :key="index" > {{ item.name }},<br/> {{ item.email }}</p> 
    </b-card>             
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

p {
  font-family: 'Dancing Script', cursive;
  font-size: 2rem;
}

</style>