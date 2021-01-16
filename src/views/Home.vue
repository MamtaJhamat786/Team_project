<template>
  <div class="homeImage pt-5">
    <input 
    id = 'search'
    type="text" 
    v-model="keyword" 
    v-bind:placeholder="$t('search')">
   <br><br>
    <b-container> 
      <b-card-group columns>
        <b-card
          v-for="(game, index) in filteredgames"
          :key="index"
          :title="game.heading"
          :img-src="game.img"
          :img-alt="game.area"
          img-top
          tag="article"
          class="card"
        >
          <b-card-text>
            {{ game.text }}
          </b-card-text>

          <b-button 
          id = 'btn-seeTeams'
          @click="toTeams(index)" 
          variant="primary">{{ $t('info.teamMembersInfo') }}
          </b-button>
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
      keyword:'',
      games: [
        {
          heading: this.$t('sports.basketball.name'),
          text:
            this.$t('sports.basketball.info'),
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0Sh97iYcu0kTguhcsW_szWfzolqu1ynGeQ&usqp=CAU",
        },
        {
          heading: this.$t('sports.badminton.name'),
          text:
            this.$t('sports.badminton.info'),
          img:
            "https://i2.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2014/03/badminton-1428047_1920-2.jpg?fit=1920%2C1280&ssl=1",
        },
        {
          heading: this.$t('sports.football.name'),
          text:
            this.$t('sports.football.info'),
          img:
            "https://www.worcester.gov.uk/images/easyblog_shared/2019/b2ap3_large_Football---carousel.jpg",
        },
        {
          heading: this.$t('sports.cricket.name'),
          text:
            this.$t('sports.cricket.info'),
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHGznCkqXL8MbFAy8YrYgk3LWzPU9b95T5g&usqp=CAU",
        },
        {
          heading: this.$t('sports.handball.name'),
          text:
            this.$t('sports.handball.info'),
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdz75gWK12Q2d_p3aahNW52yui2cc7USM1dg&usqp=CAU",
        },
        {
          heading: this.$t('sports.vollyball.name'),
          text:
            this.$t('sports.vollyball.info'),
          img:
            "https://www.pe.com/wp-content/uploads/2019/11/xxxx_spo_ocr-l-volleyball-generic-stock-001-3.jpg",
        },
        {
          heading: this.$t('sports.tabletennis.name'),
          text:
            this.$t('sports.tabletennis.info'),
          img:
            "https://www.southdownsleisure.co.uk/wp-content/uploads/2019/03/50_tabletennis-600x600.jpg",
        },
      ],
    }
  },
  methods: {
    toTeams(pathz) {
      this.$router.push({ path: `/${this.$i18n.locale}/teams/${pathz}` })
    }
  },
  computed: {
            filteredgames: function() {
                var games = [];
                for(var i in this.games) {
                    var game = this.games[i];
                    if(game.heading.toUpperCase().indexOf(this.keyword.toUpperCase()) !== -1 ||
                        game.text.indexOf(this.keyword) !== -1) {
                        games.push(game);
                    }
                }
                return games;
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