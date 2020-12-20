<template>
  <div class="homeImage pt-5">
    <img src="image" />
    <b-container>
      <b-card-group columns>
        <b-card
          v-for="(game, index) in Games"
          :key="index"
          :title="game.heading"
          :img-src="game.img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="card"
        >
          <b-card-text>
            {{ game.text }}
          </b-card-text>

          <b-button :to="`/${$i18n.locale}/teams/`+ index " variant="primary">{{ $t('info.teamMembersInfo') }}</b-button>
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
      Games: [
        {
          heading: this.$t('fields.basketball'),
          text: this.$t('fieldInfo.basketball'),
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0Sh97iYcu0kTguhcsW_szWfzolqu1ynGeQ&usqp=CAU",
        },
        {
          heading: this.$t('fields.badminton'),
          text:
            this.$t('fieldInfo.badminton'),
          img:
            "https://i2.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2014/03/badminton-1428047_1920-2.jpg?fit=1920%2C1280&ssl=1",
        },
        {
          heading: this.$t('fields.football'),
          text:
            this.$t('fieldInfo.football'),
          img:
            "https://www.worcester.gov.uk/images/easyblog_shared/2019/b2ap3_large_Football---carousel.jpg",
        },
        {
          heading: this.$t('fields.cricket'),
          text:
            this.$t('fieldInfo.cricket'),
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHGznCkqXL8MbFAy8YrYgk3LWzPU9b95T5g&usqp=CAU",
        },
        {
          heading: this.$t('fields.handball'),
          text:
            this.$t('fieldInfo.handball'),
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdz75gWK12Q2d_p3aahNW52yui2cc7USM1dg&usqp=CAU",
        },
        {
          heading: this.$t('fields.vollyball'),
          text:
            this.$t('fieldInfo.vollyball'),
          img:
            "https://www.pe.com/wp-content/uploads/2019/11/xxxx_spo_ocr-l-volleyball-generic-stock-001-3.jpg",
        },
        {
          heading: this.$t('fields.tabletennis'),
          text:
            this.$t('fieldInfo.tabletennis'),
          img:
            "https://www.southdownsleisure.co.uk/wp-content/uploads/2019/03/50_tabletennis-600x600.jpg",
        },
      ],
    };
  },
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