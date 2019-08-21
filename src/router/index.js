import Vue from 'vue'
import Router from 'vue-router'
import SearchArtist from '@/components/MusicBrainz/SearchArtist'
import SearchArtistNRelease from '@/components/MusicBrainz/SearchArtistNRelease'
import SearchRelease from '@/components/MusicBrainz/SearchRelease'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SearchArtist',
      component: SearchArtist
    },
    {
      path: '/artist',
      name: 'SearchArtistNRelease',
      component: SearchArtistNRelease
    },
    {
      path: '/release',
      name: 'SearchRelease',
      component: SearchRelease
    }
  ]
})
