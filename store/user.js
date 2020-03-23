// import Vue from 'vue'
import axios from 'axios'

export const state = () => ({
  user: ''
})

export const getters = {}

export const mutations = {}

export const actions = {
  async log (ctx, log) {
    try {
      if (log.logType === 'register') {
        await axios.post('user/register', { email: log.email, password: log.password })
      } else {
        await axios.post('user/login', { email: log.email, password: log.password })
      }
    } catch (error) {
      console.log(error)
    }
  }
}
