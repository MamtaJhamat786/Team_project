<template>
  <div class="homeImage">
    <b-card
      title="Football"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style  scoped>
.homeImage {
  background-image: url("https://cdn150.picsart.com/232635544019202.jpg?type=webp&to=min&r=1024");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  background-position: center;
}
</style>
