<template>
  <div class="homeImage pt-5">
    <b-container>
      <b-card-group columns>
        <b-card
          v-for="(game, index) in $t('fields')"
          :key="index"
          :title="game.area"
          :img-src="game.img"
          :img-alt="game.area"
          img-top
          tag="article"
          class="card"
        >
          <b-card-text>
            {{ game.info }}
          </b-card-text>

          <b-button @click="toTeams(index)" variant="primary">{{ $t('info.teamMembersInfo') }}</b-button>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  components: {},
  data() {
    return {
    }
  },
  methods: {
    toTeams(pathz) {
      this.$router.push({ path: `/${this.$i18n.locale}/teams/${pathz}` })
    }
  }
};
</script>
<style  scoped>
.homeImage {
  background-image: url("https://cdn150.picsart.com/232635544019202.jpg?type=webp&to=min&r=1024");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  background-position: center;
}
.rounded-card {
  border-radius: 20px;
  min-height: 50px;
  min-width: 20px;
}
.card{
    margin-bottom: 15px;
}
</style>