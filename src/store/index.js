import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups:[
            {
            id:'fef',
            troskovi:'15kn',
            brojosoba: '8',
            komentar:'Ulaz sa straznje strane',
            naziv:'Nogomet',
            date: new Date(),
            timestart: new Date(),
            timeend: new Date(),
            kategorija:'Sport',
            imageUrl:'https://picsum.photos/1000/700'
        },
        {
            id:'fef',
            troskovi:'30kn',
            brojosoba: '4',
            komentar:'Uzeti rucnike',
            naziv:'Kosarka',
            date: new Date(),
            timestart: new Date(),
            timeend: new Date(),
            kategorija:'Sport',
            imageUrl:'https://picsum.photos/1000/700'
        },
        ],
        user:null,
        loading: false,
        error: null
    },
    mutations: {
        createMeetup (state, payload) {
            state.loadedMeetups.push(payload)
          },
        setLoadedMeetups (state, payload) {
          state.loadedMeetups = payload
        },
        setUser (state, payload) {
          state.user = payload
        },
        setLoading (state, payload) {
          state.loading = payload
        },
        setError (state, payload) {
          state.error = payload
        },
        clearError (state) {
          state.error = null
        }
      },
    actions: {
        loadMeetups ({commit}) {
            commit('setLoading', true)
            firebase.database().ref('meetups').once('value')
              .then((data) => {
                const meetups = []
                const obj = data.val()
                for (let key in obj) {
                  meetups.push({
                    id: key,
                    naziv: obj[key].naziv,
                    komentar: obj[key].komentar,
                    troskovi: obj[key].troskovi,
                    date: obj[key].date,
                    creatorId: obj[key].creatorId,
                    brojosoba: obj[key].brojosoba,
                    timestart: obj[key].timestart,
                    timeend: obj[key].timeend,
                    lat: obj[key].lat,
                    lng: obj[key].lng,
                    kategorija: obj[key].kategorija,
                  })
                }
              })
              .catch(
                (error) => {
                  console.log(error)
                  commit('setLoading', false)
                }
              )
          },
        createMeetup({commit}, payload){
            const meetup = {
                troskovi: payload.troskovi,
                brojosoba: payload.brojosoba,
                komentar: payload.komentar,
                naziv: payload.naziv,
                date: payload.date,
                timestart: payload.timestartdate,
                timeend:payload.timeenddate,
                lat: payload.lat,
                lng: payload.lng,
                kategorija: payload.kategorija,
            }
            commit('createMeetup', meetup)
        },
            /*firebase.database().ref('meetups').push(meetup)
            .then((data) => {
              const key = data.key
              commit('createMeetup', {
                ...meetup,
                id: key
              })
            })
            .catch((error) => {
              console.log(error)
            })
            }, */
            signUserUp ({commit}, payload) {
                firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                  .then(
                    user => {
                      const newUser = {
                        id: user.uid,
                        registeredMeetups: []
                      }
                      commit('setUser', newUser)
                    }
                  )
                  .catch(
                    error => {
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error)
                    }
                )
            },
            signUserIn ({commit}, payload) {
                commit('setLoading', true)
                commit('clearError')
                firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                  .then(
                    user => {
                      commit('setLoading', false)
                      const newUser = {
                        id: user.uid,
                        registeredMeetups: []
                      }
                      commit('setUser', newUser)
                    }
                  )
                  .catch(
                    error => {
                      commit('setLoading', false)
                      commit('setError', error)
                      console.log(error)
                    }
                  )
              },
              autoSignIn ({commit}, payload) {
                commit('setUser', {id: payload.uid, registeredMeetups: []})
              },
              logout ({commit}) {
                firebase.auth().signOut()
                commit('setUser', null)
              },
              clearError ({commit}) {
                commit('clearError')
              } 
    },
    getters: {
        loadedMeetups (state){
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups (state, getters){
            return getters.loadedMeetups.slice(0,5)
        },
        loadedMeetup (state){
            return (meetupId)=>{
                return state.loadedMeetups.find((meetup)=>{
                    return meetup.id === meetupId
                })
            }
        },
        user (state) {
            return state.user
          },
          loading (state) {
            return state.loading
          },
    }
})