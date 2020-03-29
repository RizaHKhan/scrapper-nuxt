import axios from 'axios'

export const state = () => ({
  token: null
})

export const getters = {
  isAuthenticated: state => state.token != null
}

export const mutations = {
  commitToken (state, token) {
    state.token = token
  },
  logout (state) {
    state.token = null
  }
}

export const actions = {
  async log ({ commit }, user) {
    if (user.logType === 'register') {
      try {
        const response = await axios.post('user/register', { email: user.email, password: user.password })
        commit('commitToken', response.data.token)
        this.$router.push('/dashboard')
      } catch (error) {
        if (error.response) {
          console.log(error.response.data)
        } else {
          console.log(error)
        }
      }
    } else {
      try {
        const response = await axios.post('user/login', { email: user.email, password: user.password })
        commit('commitToken', response.data.token)
        this.$router.push('/dashboard')
      } catch (error) {
        if (error.response) {
          console.log(error.response)
        } else {
          console.log(error)
        }
      }
    }
  },
  logout ({ commit }) {
    commit('logout')
  }
}
