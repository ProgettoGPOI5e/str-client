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
    },
    clearUser (state) {
      state.userId = null
      state.token = null
      state.user = null
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
      router.push('/customer')
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
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      commit('clearUser')
      router.push('/login')
    }
  },
  getters: {
    getUser ({ user }) {
      return user
    },
    isAuthenticated ({ token, userId }) {
      if (!token || !userId) {
        return false
      }

      return true
    },
    getToken ({ token }) {
      return token
    },
    getUserId ({ userId }) {
      return userId
    }
  },
  modules: {
  }
})
