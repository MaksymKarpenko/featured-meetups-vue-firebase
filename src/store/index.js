import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://ob9a8415roh4djoj110c31a1-wpengine.netdna-ssl.com/wp-content/uploads/2013/02/barcelona-aerial-view.jpg',
        id: 'sdfsdf123',
        title: 'Meetup in Barcelona',
        date: '2017-07-17'
      },
      {
        imageUrl: 'https://putevye-istorii.ru/wp-content/uploads/2016/11/IMG_1987.jpg',
        id: 'sdfsdf456',
        title: 'Meetup in Amsterdam',
        date: '2017-07-19'
      }
    ],
    user: {
      id: 'qwer123',
      registrationMeetups: ['sdfsdf456']
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date

      }
      //  Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  }
})
