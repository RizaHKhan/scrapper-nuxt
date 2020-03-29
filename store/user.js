import axios from 'axios'

export const state = () => ({
  token: ''
})

export const getters = {
  token: state => state.token
}

export const mutations = {
  commitToken (state, token) {
    state.token = token
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
        console.log(response.data.token)
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
  }
}
