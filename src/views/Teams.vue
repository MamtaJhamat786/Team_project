<template>
  <div class="homeImage pt-5">
    <b-container>
      <b-row>
        <b-col>
        <h1>{{ $t('fields.' + [this.$route.params.game] + '.area') }}</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div>
            <b-button class="btn-xl" variant="primary" id="show-btn" v-if="auth" @click="showModal" mt-3>{{ $t('info.createteam') }}</b-button>
            <br />
            <br />
            <br />
          </div>
          <b-list-group>
            <b-list-group-item
              v-for="(team, index) in teams.slice().reverse()"
              :key="index"
              class="mt-3"
            >
              <div class="d-flex w-100 justify-content-between">
                <p>{{ index + 1 }}</p>
                <h5 class="mb-1">{{ team.teamName }}</h5>
                <b-badge v-if="team.teamMembers" class="align-self-center" variant="primary" pill
              >{{ team.teamMembers.length + 1  }}</b-badge
                >
                <b-badge v-else class="align-self-center" variant="danger" pill>1</b-badge>
              </div>

              <b-list-group>
                <b-list-group-item variant="warning">{{ team.teamCreator }}</b-list-group-item>
                <b-list-group-item v-for="(member, index) in team.teamMembers" :key="index">{{ member }}</b-list-group-item>
              </b-list-group>
              <br />
              <b-button class="centered" variant="primary" @click="joinTeam(team.id)">{{ $t('info.jointeam') }}</b-button>
              <b-button class="left" variant="secondary" @click="leftTeam(team.id)">{{ $t('Leave this team') }}</b-button>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
    <div>   
              <b-modal
                ref="my-modal"
                :title="$t('info.createNewTeam')"
                hide-footer
              >
              <b-input-group class="mt-2">
                <b-form-input  type="text" :placeholder="$t('info.teamName')" v-model="team"></b-form-input>
              </b-input-group>
                <b-button
                  class="mt-3"
                  variant="primary"
                  @click="createTeam"
                  >{{ $t('info.create') }}</b-button
                >
              </b-modal>
            </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Home",
  components: {},
  data() {
    return {
      team: '',
      teams: []
    };
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    createTeam(){
      console.log(this.$store.state.loadedData[0].name)
      axios.post('https://finduppartner.firebaseio.com/teams.json', {teamName : this.team, teamField : this.$route.params.game, teamCreator: this.$store.state.loadedData[0].name, teamMembers: [] })
      .then((result) => {
        this.$refs["my-modal"].hide();
        this.team = ''
        this.getTeams()
      })
      .catch(e => console.log(e))
  },
  getTeams() {
    axios.get('https://finduppartner.firebaseio.com/teams.json')
    .then((res) => {
      const data = res.data
      const teams = []
        for (let key in data) {
          const team = data[key]
          team.id = key
          teams.push(team)
        }
      var match = teams.filter(match => match.teamField === this.$route.params.game)
      this.teams = match
    } )
    .catch(e => console.log(e))
  },
  leftTeam(id) {
    let name = this.$store.state.loadedData[0].name
    axios.patch('https://finduppartner.firebaseio.com/teams/'+ id + '.json', { teamMembers: [name] } )
    //axios.put('https://finduppartner.firebaseio.com/teams/'+ id + '.json', { teamMembers: array } )
  },
 joinTeam(id) {
     let name = this.$store.state.loadedData[0].name
     axios.get('https://finduppartner.firebaseio.com/teams/'+ id + '/teamMembers.json')
     .then((res) => {
       if (res.data) {
         var array = res.data
         array.push(name)
         axios.patch('https://finduppartner.firebaseio.com/teams/'+ id + '.json', { teamMembers: array } )
    .then((res) => {
      console.log(res)
      this.getTeams()
    })
    .catch(e => console.log(e))
       } else if (!res.data) {
         axios.patch('https://finduppartner.firebaseio.com/teams/'+ id + '.json', { teamMembers: [name] } )
    .then((res) => {
      console.log(res)
      this.getTeams()
    })
    .catch(e => console.log(e))
       }
     })
     .catch(e => console.log(e))
  }
},
 computed: {
  auth() {
    return this.$store.getters.isAuth 
  }
  },
created()  {
  this.getTeams()
  this.$store.dispatch('fetchData')
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
.left {
  padding: 8px 12px;
  font-size: 15px;
  
  float: right;
  margin-top: 3px;
}
}
</style>
