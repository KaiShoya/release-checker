<template>
  <section>
    <b-field horizontal label="Artist">
      <b-input placeholder="Artist" type="search" v-model="query.artist"></b-input>
    </b-field>
    <b-button @click="search">Search</b-button>
    <template>
      <b-table
        :data="results"
        :columns="columns"
        detail-key="name"
        :loading="isLoading"
        @details-open="(row, index) => $toast.open(`Expanded ${row.user.first_name}`)"
      ></b-table>
    </template>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      country: [
        { id: 'JP', name: '日本' },
        { id: 'US', name: 'アメリカ' }
      ],
      searchUrl: 'http://musicbrainz.org/ws/2/release-group/?fmt=json&',
      query: {
        type: 'album|ep',
        artist: this.$route.query.id
      },
      isLoading: false,
      results: [],
      columns: [
        {
          field: 'title',
          label: 'タイトル'
        },
        {
          field: 'first-release-date',
          label: 'リリース日'
        },
        {
          field: 'primary-type',
          label: 'タイプ'
        }
      ]
    }
  },
  watch: {
    '$route' (to, from) {
      this.$set(this.query, 'artist', to.query.id)
    }
  },
  methods: {
    search () {
      this.isLoading = true
      let url = this.searchUrl + this.create_params()
      axios.get(url)
        .then(function (res) {
          this.results = res.data['release-groups']
        }.bind(this))
        .catch(function (err) {
          console.log(err)
        })
        .finally(function () {
          this.isLoading = false
        }.bind(this))
    },
    create_params: function (params = this.query) {
      let tmpArr = []
      Object.keys(params).forEach(function (key) {
        if (params[key] === null) {
        } else if (params[key] === undefined) {
          tmpArr.push(key)
        } else {
          tmpArr.push(key + '=' + params[key])
        }
      })
      return tmpArr.join('&')
    }
  }
}
</script>
