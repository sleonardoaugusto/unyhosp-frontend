<template>
  <div id="app" class="container d-flex justify-content-center">
    <router-link :to="{name: 'hospitals'}"></router-link>
    <router-view/>
    <NotificationList/>
  </div>
</template>

<script>
import NotificationList from '@/components/notification/NotificationList'

export default {
  components: {
    NotificationList
  }
}
</script>

<style lang="scss">
  @import 'assets/main';
</style>
