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

    <b-table :data="results" ref="table" detailed hoverable
        custom-detail-row detail-key="name" :loading="isLoading" :show-detail-icon="showDetailIcon">
      <template slot-scope="props">
        <b-table-column field="name" :label="columnsVisible.name.title">
          <template>
            <a @click="toggle(props.row)">
              {{ props.row.name }}
            </a>
          </template>
        </b-table-column>

        <b-table-column field="country" :label="columnsVisible.country.title">
          {{ props.row.country }}
        </b-table-column>

        <b-table-column field="score" :label="columnsVisible.score.title">
          {{ props.row.score }}
        </b-table-column>
      </template>

      <template slot="detail" slot-scope="props">
        <tr v-for="item in props.row.items" :key="item['id']">
          <td>- {{ item['title'] }}</td>
          <td>{{ item['first-release-date'] }}</td>
          <td>{{ item['primary-type'] }}</td>
        </tr>
      </template>
    </b-table>
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
      releaseUrl: 'http://musicbrainz.org/ws/2/release-group/?fmt=json&',
      query: {
        // artist: 'ポルカドットスティングレイ',
        artist: '',
        type: 'group',
        country: 'JP'
      },
      isLoading: false,
      showDetailIcon: false,
      results: [],
      columnsVisible: {
        name: { title: 'アーティスト名' },
        country: { title: '国' },
        score: { title: '一致度' }
      }
    }
  },
  methods: {
    search: function () {
      this.isLoading = true
      let url = this.searchUrl + this.create_params()
      axios.get(url)
        .then(async function (res) {
          for (const [i, artist] of res.data.artists.entries()) {
            let params = {
              type: 'album|ep',
              artist: artist.id
            }
            let url = this.releaseUrl + this.join_params(params)
            let response = await axios.get(url)
            res.data.artists[i].items = response.data['release-groups']
          }
          console.log(res.data.artists)
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
    },
    join_params: function (params = this.query) {
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
    },
    toggle (row) {
      this.$refs.table.toggleDetails(row)
    }
  }
}
</script>
