<template>
  <b-table :data="artists" :columns="columns"></b-table>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          field: 'name',
          label: 'Name'
        }
      ]
    }
  },
  computed: {
    artists () {
      return Object.values(this.$store.state.artists.artists)
    }
  }
}
</script>
