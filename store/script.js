// import Vue from 'vue'
import axios from 'axios'

export const state = () => ({
  scripts: ''
})

export const getters = {}

export const mutations = {}

export const actions = {
  async checklist () {
    try {
      const response = await axios.get('/scripts/checklist')
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
}
