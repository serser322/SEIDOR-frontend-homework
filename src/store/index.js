import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      nameData: {
        name: '',
        lastName: ''
      },
      pageData: {}
    }
  },
  mutations: {
    setNameData (state, payload) {
      state.nameData.name = payload.name
      state.nameData.lastName = payload.lastName
    },
    setPageData (state, payload) {
      state.pageData = { ...payload }
    }
  }
})
