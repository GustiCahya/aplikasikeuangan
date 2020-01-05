<template>
  <div>

    <nav-app v-if="this.$route.path !== '/login'"></nav-app>
    <sidebar-app></sidebar-app>

  </div>
</template>

<script>
import navApp from './components/navApp'
import sideBarApp from './components/sideBarApp'
export default {
  components:{
    'nav-app': navApp,
    'sidebar-app': sideBarApp
  }
}
</script>

<style scoped>

</style>
