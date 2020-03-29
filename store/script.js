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
  async checklist ({ commit }) {
    try {
      const response = await axios.get('/scripts/checklist')
      commit('addToState', response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async outbreak ({ commit }) {
    try {
      const response = await axios.get('/scripts/outbreak')
      commit('addToState', response.data)
    } catch (error) {
      console.log(error)
    }
  },
  async stackoverflow ({ commit }) {
    try {
      const response = await axios.get('/scripts/stackoverflow')
      commit('addToState', response.data)
    } catch (error) {
      console.log(error)
    }
  }
}
