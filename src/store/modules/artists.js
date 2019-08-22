import Vue from 'vue'

export default {
  state: {
    artists: {}
  },
  mutations: {
    setArtist (state, artist) {
      Vue.set(state.artists, artist.id, artist)
    },
    deleteArtist (state, id) {
      Vue.delete(state.artists, id)
    }
  },
  getter: {
    arrayArtists: state => {
      return Object.values(state.artists)
    }
  }
  // actions: {
  //   setArtist ({ commit }, payLoad) {
  //     commit('setArtist', payLoad, { root: true })
  //   }
}
