import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    query: '',
    results: [],
    loading: false,
    error: null,
  },
  mutations: {
    setQuery(state, payload) {
      state.query = payload
    },
    setResults(state, payload) {
      state.results = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    }
  },
  actions: {
    async searchRepositories({ commit, state }) {
      commit('setLoading', true)
      commit('setError', null)

      try {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=${state.query}`
        )
        commit('setResults', response.data.items)
      } catch (err) {
        commit('setError', 'Something went wrong. Please try again.')
      } finally {
        commit('setLoading', false)
      }
    }
  }
})
