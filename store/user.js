import Vue from 'vue'
import axios from 'axios'

export const state = () => ({
  user: ''
})

export const getters = {}

export const mutations = {}

export const action = {
  log(ctx, log) {
    console.log('I am logged')
  }
}
