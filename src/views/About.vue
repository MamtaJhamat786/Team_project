<template>
<div class ="About">
    <b-container>
      <br/>
      <h1> {{ $t('about.heading') }}</h1>
      <br />
      <b-row>
        <b-col>
          <p class="text-justify font-italic" style="fontSize: 1.8rem">
           {{ $t('about.text') }}
          </p>
        </b-col>
      </b-row>
   </b-container>
  </div>

</template>

<script>
export default {
  name: 'About',
  beforeCreate: function() {
        document.body.className = 'about';
    },

}
</script>

<style>

</style>