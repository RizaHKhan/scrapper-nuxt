// import Vue from 'vue'
import axios from 'axios'

export const state = () => ({
  response: []
})

export const getters = {
  getResponse: state => state.response
}

export const mutations = {
  addToState (state, response) {
    state.response = []
    response.forEach(item => {
      state.response.push(item)
    })
  }
}

export const actions = {
  async checklist ({ commit }, token) {
    try {
      const response = await axios.post('/scripts/checklist', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      commit('addToState', response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async outbreak ({ commit }, token) {
    try {
      const response = await axios.post('/scripts/outbreak', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      commit('addToState', response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async stackoverflow ({ commit }, token) {
    try {
      const response = await axios.post('/scripts/stackoverflow', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      commit('addToState', response.data)
    } catch (error) {
      console.log(error)
    }
  }
}
