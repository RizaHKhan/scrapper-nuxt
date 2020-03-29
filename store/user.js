import axios from 'axios'

export const state = () => ({
  token: null,
  user: null
})

export const getters = {
  user: state => state.user
}

export const mutations = {
  commitToken (state, token) {
    state.token = token
  },
  commitUser (state, user) {
    state.user = user
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
        commit('commitUser', response.data.user)
        this.$router.push('/dashboard/' + response.data.user._id)
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
        console.log(response.data)
        commit('commitToken', response.data.token)
        commit('commitUser', response.data.user)
        this.$router.push('/dashboard/' + response.data.user._id)
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
