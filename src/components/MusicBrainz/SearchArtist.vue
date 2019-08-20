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
      <b-table :data="results" ref="table" :loading="isLoading">
        <template slot-scope="props">
          <b-table-column field="name" :label="columnsVisible.name.title">
            {{ props.row.name }}
          </b-table-column>

          <b-table-column field="id" :label="columnsVisible.id.title">
            {{ props.row.id }}
          </b-table-column>

          <b-table-column field="add">
            <b-button @click="add(props.row)">追加</b-button>
          </b-table-column>
        </template>
      </b-table>
    </template>
  </section>
</template>

<script>
import axios from 'axios'
// import yorushika from '@/assets/musicbrainzYorushika.json'
// import musicbrainz from '@/assets/musicbrainz.json'

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
      // results: [
      //   yorushika,
      //   musicbrainz
      // ],
      columnsVisible: {
        name: { title: 'アーティスト名' },
        id: { title: 'ID' }
      },
      checkedRows: []
    }
  },
  methods: {
    search: function () {
      // テーブルのローディング機能をOn
      this.isLoading = true
      // URL作成
      let url = this.searchUrl + this.create_params()
      // 非同期通信
      axios.get(url)
        .then(function (res) {
          this.results = res.data.artists
        }.bind(this))
        .catch(function (err) {
          console.log(err)
        })
        .finally(function () {
          // テーブルのローディング機能をOff
          this.isLoading = false
        }.bind(this))
    },
    add: function (data) {
      this.$store.commit('setArtist', data)
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
