<template>
  <div class="homeImage pt-5">
    <b-container>
      <b-row>
        <b-col>
          <div>
          <b-button class="btn-xl"  variant="primary" mt-3 @click="newTeam" >Create team</b-button>
          <br>
          <br>
          <br>
          </div>
          <b-list-group >
            <b-list-group-item
              v-for="(team, index) in games[this.$route.params.game]"
              :key="index"
              class="mt-3"
            >
              <div class="d-flex w-100 justify-content-between">
                <p>{{ index + 1 }}</p>
                <h5 class="mb-1">{{ team.heading }}</h5>
                <b-badge class="align-self-center" variant="primary" pill >14</b-badge>
              </div>

              <b-list-group>
                <b-list-group-item>Kazu</b-list-group-item>
                <b-list-group-item>Ursel</b-list-group-item>
                <b-list-group-item>Kaur</b-list-group-item>
              </b-list-group>
              <br />
              <b-button variant="primary">Join our team</b-button>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      games: {
        0: [
          {
            heading: "Lions Team",
          },
          {
            heading: "Tiger Team",
          },
          {
            heading: "Smooth Team",
          },
        ],
        1: [
          {
            heading: "Indian Team",
          },
          {
            heading: "Inter Team",
          },
          {
            heading: "Lovely Team",
          },
        ],
        2: [
          {
            heading: "Taj Team",
          },
          {
            heading: "Kaur Team",
          },
          {
            heading: "Raj Team",
          },
        ],
        3: [
          {
            heading: "super Team",
          },
          {
            heading: "Nimrat Team",
          },
          {
            heading: "BJ Team",
          },
        ],
        4: [
          {
            heading: "Hari Team",
          },
          {
            heading: "Tech Team",
          },
          {
            heading: "Goodwin Team",
          },
        ],
        5: [
          {
            heading: "Full Team",
          },
          {
            heading: "Entertain Team",
          },
          {
            heading: "Lok Team",
          },
        ],
        6: [
          {
            heading: "Khushi Team",
          },
          {
            heading: "Natak Team",
          },
          {
            heading: "AJ Team",
          },
        ],
      },
    };
  },
  methods:{
    newTeam(){
      

    }


  }
};
</script>
<style  scoped>
.homeImage {
  background-image: url("https://upl.stack.com/wp-content/uploads/2020/04/14140000/Multiple.jpg");
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
.card {
  margin-bottom: 15px;
}
.btn-xl {
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 10px;
    float: right;
    margin-top: 3px;
}
</style>