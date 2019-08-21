<template>
  <section>
    <template>
      <b-table :data="artists" ref="table">
        <template slot-scope="props">
          <b-table-column field="name" label="名前">
            {{ props.row.name }}
          </b-table-column>

          <b-table-column field="button">
            <b-button tag="router-link" :to="{ path: '/release', query: { id: props.row.id }}">リリース</b-button>
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
  }
}
</script>
