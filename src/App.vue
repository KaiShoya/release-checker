<template>
  <div class="columns" id="app">
    <Menu class="column is-one-quarter"></Menu>
    <router-view class="column"></router-view>
    <List class="column is-one-quarter"></List>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import List from '@/components/List'

export default {
  name: 'App',
  components: { Menu, List }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
