import axios from 'axios'

export const state = () => ({
  user: ''
})

export const getters = {}

export const mutations = {}

export const actions = {
  async log ({ commit }, user) {

    if (user.logType === 'register') {
      try {
        await axios.post('user/register', { email: user.email, password: user.password })
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
        await axios.post('user/login', { email: user.email, password: user.password })
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
