import Vue from 'vue'
import Vuex from 'vuex'

import v1 from '@/utils/v1'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    userId: null,
    user: null
  },
  mutations: {
    setToken (state, { token }) {
      state.token = token
    },
    setUserId (state, { userId }) {
      state.userId = userId
    },
    setUser (state, user) {
      state.user = user
    },
    authUser (state, { userId, token }) {
      state.userId = userId
      state.token = token
    }
  },
  actions: {
    async login ({ commit }, { email, password }) {
      const response = await v1.post('/login', {
        email,
        password
      })
      const { token } = response.data
      const userId = JSON.parse(atob(token.split('.')[1]))._id
      commit('authUser', {
        token,
        userId
      })
      localStorage.setItem('token', token)
      localStorage.setItem('userId', userId)
      console.log('Login effettuato.')
      router.push('/back')
    },
    async fetchUser ({ commit, state }) {
      const response = await v1.get('/users/' + state.userId)
      const user = response.data
      commit('setUser', user)
    },
    authenticate ({ commit }) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('authUser', {
        userId,
        token
      })
    },
    logout ({ commit }) {
      localStorage.setItem('token', null)
      localStorage.setItem('userId', null)
      commit('authUser', {
        userId: null,
        token: null
      })
      router.push('/')
    }
  },
  getters: {
    getUser ({ user }) {
      return user
    },
    isAuthenticated () {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')
      if (!token || !userId) {
        return false
      }
    },
    getUserId ({ userId }) {
      return userId
    }
  },
  modules: {
  }
})
