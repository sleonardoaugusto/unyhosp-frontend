<template>
  <div class="notification-container">
    <Notification
      v-for="n in notifications"
      :notification="n"
      :key="n.id"
      @close-notification="close(n)"
    />
  </div>
</template>

<script>
import Notification from '@/components/notification/Notification'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'NotificationList',
  components: {
    Notification
  },
  methods: {
    close(notification) {
      this.remove(notification)
    },
    ...mapActions({
      remove: 'notification/remove'
    })
  },
  computed:
    mapState({
      notifications: state => state.notification.notifications
    })
}
</script>

<style scoped>

</style>