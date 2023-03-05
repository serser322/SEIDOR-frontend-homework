import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      pageData: {}
    }
  },
  mutations: {
    setPageData (state, payload) {
      state.pageData = { ...payload }
    }
  }
})
