<template>
  <section>
    <template>
      <b-table :data="artists" ref="table">
        <template slot-scope="props">
          <b-table-column field="name" label="名前">{{ props.row.name }}</b-table-column>

          <b-table-column field="button">
            <b-button tag="router-link" :to="{ path: '/release', query: { id: props.row.id }}" class="is-small">リリース</b-button>
          </b-table-column>

          <b-table-column field="delete">
            <b-button @click="onClickDelete(props.row.id)" class="is-danger is-small">
              <b-icon icon="close"></b-icon>
            </b-button>
          </b-table-column>
        </template>
      </b-table>
    </template>
  </section>
</template>

<script>
export default {
  computed: {
    artists () {
      return Object.values(this.$store.state.artists.artists)
    }
  },
  methods: {
    onClickDelete: function (id) {
      this.$store.commit('deleteArtist', id)
    }
  }
}
</script>
