<template>
  <section>
    <b-field horizontal label="Artist">
      <b-input placeholder="Artist" type="search" v-model="query.artist"></b-input>
    </b-field>
    <b-field horizontal label="Country">
      <b-select placeholder="Country" v-model="query.country">
        <option v-for="option in country" :value="option.id" :key="option.id">
          {{ option.name }}
        </option>
      </b-select>
    </b-field>
    <b-button @click="search">Search</b-button>
    <template>
      <b-table :data="results" :columns="columns" detailed detail-key="name" :loading="isLoading"
        @details-open="(row, index) => $toast.open(`Expanded ${row.user.first_name}`)"></b-table>
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
      searchUrl: 'http://musicbrainz.org/ws/2/artist/?fmt=json&query=',
      query: {
        // artist: 'ポルカドットスティングレイ',
        artist: 'ヨルシカ',
        type: 'group',
        country: 'JP'
      },
      isLoading: false,
      results: [],
      columns: [
        {
          field: 'name',
          label: 'Name'
        },
        {
          field: 'id',
          label: 'ID'
        }
      ]
    }
  },
  methods: {
    search: function () {
      this.isLoading = true
      let url = this.searchUrl + this.create_params()
      axios.get(url)
        .then(function (res) {
          this.results = res.data.artists
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
          tmpArr.push(key + ':' + params[key])
        }
      })
      return tmpArr.join('%20AND%20')
    }
  }
}
</script>
