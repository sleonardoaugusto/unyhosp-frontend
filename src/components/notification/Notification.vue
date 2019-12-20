<template>
  <div class="notification-bar">
    <p class="notification-bar__message">
      <span class="notification-bar__close" @click="close">x</span>
      {{ notification.message }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('close-notification')
    }
  }
}
</script>

<style scoped>

</style>