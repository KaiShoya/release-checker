import Vue from 'vue'

export default {
  // namespaced: true,
  state: {
    artists: {}
  },
  mutations: {
    setArtist (state, artist) {
      // console.log(artist)
      Vue.set(state.artists, artist.id, artist)
      // state.artists[artist.id] = artist
      console.log(state.artists)
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
