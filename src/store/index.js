import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import router from '../router'
import i18n from '../i18n'

Vue.use(Vuex)
Vue.use(Vuelidate)

export default new Vuex.Store({
  state: {
    index: '',
    idToken: null,
    userId: null,
    email: null,
    loadedData: [],
    singleDetail: [],
    error: null,
    teams: [], 
    // isLoggedIn:false

  },
  mutations: {
    teams(state, payload) {
      state.teams = payload
    },
      authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
      state.email = userData.email
    },
    data (state, payload) {
      state.loadedData = payload
    },
    single(state, payload) {
      state.singleDetail = payload
    },
    clearToken (state) {
      state.idToken = null,
      state.userId = null
    },
    loginError (state, payload) {
      state.error = payload
    }, 
    // setAuth(state, payload){
    //   state.isLoggedin= payload.isAuth
    // }
  },
  actions: {
    getTeams({commit}, teams) {
      axios.get('https://finduppartner.firebaseio.com/teams.json')
      .then(result => {
        console.log(result)
        commit('teams')
      })
      .catch(e => {console.log(e)})
    },

    signup({commit}, authData) {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAYRWDRm0ys_8INm85J-OB7stAoMsNEuSE",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((result) => {
          console.log(result)
          commit('authUser', {
            token: result.data.idToken,
            userId: result.data.localId,
            email: result.data.email
            
        })
          localStorage.setItem('token', result.data.idToken)
          localStorage.setItem('localId', result.data.localId)
          localStorage.setItem('email', result.data.email)
      axios.post('https://finduppartner.firebaseio.com/user.json', authData)
        .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response.data);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error.message);
            }
          });
      })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    },
    logout({commit}) {
      commit('clearToken')
      localStorage.removeItem('token')
      localStorage.removeItem('localId')
      localStorage.removeItem('email')
    },
    login({ commit }, authData) {
      axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAYRWDRm0ys_8INm85J-OB7stAoMsNEuSE',
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,

        }).then(result => {
          console.log(result)
          commit('authUser', {
            token: result.data.idToken,
            userId: result.data.localId,
            email: result.data.email
          })
          this.state.error = null
          router.replace(`/${i18n.locale}/`)
          localStorage.setItem('token', result.data.idToken)
          localStorage.setItem('localId', result.data.localId)
          localStorage.setItem('email', result.data.email)
        })
        .catch(e => {
          commit('loginError', {
            error: e.status
          })
        })
        
    },
    // signin(context){
    //   context.commit('setAuth', { isAuth:true });

    // },
    // signout(context){
    //   context.commit('setAuth', { isAuth:false });

    // },
  autoLogin({commit}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const userId = localStorage.getItem('localId')
      const email = localStorage.getItem('email')
      commit('authUser', {
        token : token,
        userId : userId,
        email : email
      })
  },
  fetchData({ commit, state }) {
    if (!state.idToken) {
      return
    }
    axios.get('https://finduppartner.firebaseio.com/user.json')
      .then((result) => {
        const data = result.data
        const users = []
        for (let key in data) {
          const user = data[key]
          user.id = key
          users.push(user)
        }
        var match = users.filter(match => match.email === state.email)
        commit('data', match)
      })
      .catch(e => console.log(e))
  }
}, 
  getters: {
    data (state) {
      return state.loadedData
    },
    single (state) {
      return state.singleDetail
    },
    isAuth(state) {
      return state.idToken !== null
    },
    error(state) {
      return state.error !== null
    },
  }
})
