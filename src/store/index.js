import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups:[
            {
            id:'fef',
            troskovi:'15kn',
            brojosoba: '8',
            komentar:'ulaz sa straznje strane',
            naziv:'nogomet',
            date: '2019-9-19',
            imageUrl:'https://picsum.photos/1000/700'
        },
        {
            id:'njnje',
            troskovi:'20kn',
            brojosoba: '2',
            komentar:'ulaz ispred zgrade',
            naziv:'bella',
            date: '2020-31-1',
            imageUrl:'https://picsum.photos/200/300'
        },
        {
            id:'njje',
            troskovi:'10kn',
            brojosoba: '2',
            komentar:'dodite 5 minuta prije',
            naziv:'macevanje',
            date: '2020-29-1',
            imageUrl:'https://picsum.photos/200/300'
        }
        ],
        user:{
            id: 'haha',
            registeredMeetups: ['njnje']
        }
    },
    mutations: {
        createMeetup (state, payload){
            state.loadedMeetups.push(payload)
        }
    },
    actions: {
        createMeetup({commit}, payload){
            const meetup = {
                troskovi: payload.troskovi,
                brojosoba: payload.brojosoba,
                komentar: payload.komentar,
                naziv: payload.naziv,
                datum: payload.datum,
                id: 'bezveze'
            }
            commit ('createMeetup', meetup)
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
        }
    }
})