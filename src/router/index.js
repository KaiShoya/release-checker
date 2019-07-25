import Vue from 'vue'
import Router from 'vue-router'
import SearchArtist from '@/components/MusicBrainz/SearchArtist'
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
      path: '/release',
      name: 'SearchRelease',
      component: SearchRelease
    }
  ]
})
