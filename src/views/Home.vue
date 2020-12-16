<template>
  <div class="homeImage pt-5">
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

          <b-button href="#" variant="primary">Team Members Info</b-button>
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
          heading: 'Basketball',
          text:
            "Hello Basketball players, want to know about team members. Click Below.",
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0Sh97iYcu0kTguhcsW_szWfzolqu1ynGeQ&usqp=CAU",
        },
        {
          heading: 'Badminton',
          text:
            "Hello Badminton lovers, want to know about team members. Click Below.",
          img:
            "https://i2.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2014/03/badminton-1428047_1920-2.jpg?fit=1920%2C1280&ssl=1",
        },
        {
          heading: 'Football',
          text:
            "Hello Football lovers, want to know about team members. Click Below.",
          img:
            "https://www.worcester.gov.uk/images/easyblog_shared/2019/b2ap3_large_Football---carousel.jpg",
        },
        {
          heading: 'Cricket',
          text:
            "Hello Cricket lovers, want to know about team members. Click Below.",
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHGznCkqXL8MbFAy8YrYgk3LWzPU9b95T5g&usqp=CAU",
        },
        {
          heading: 'Handball',
          text:
            "Hello Handball lovers, want to know about team members. Click Below.",
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdz75gWK12Q2d_p3aahNW52yui2cc7USM1dg&usqp=CAU",
        },
        {
          heading: 'Vollyball',
          text:
            "Hello Vollyball lovers, want to know about team members. Click Below.",
          img:
            "https://www.pe.com/wp-content/uploads/2019/11/xxxx_spo_ocr-l-volleyball-generic-stock-001-3.jpg",
        },
        {
          heading: 'Tabletenis',
          text:
            "Hello Tabletennis lovers, want to know about team members. Click Below.",
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
