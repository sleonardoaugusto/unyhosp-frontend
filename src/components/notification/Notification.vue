<template>
  <div class="notification-bar">
    <p class="notification-bar__message">
      <BaseIcon class="c-pointer" @click.native="close" name="x-circle"/>
      {{ notification.message }}
    </p>
  </div>
</template>

<script>
import BaseIcon from '@/components/common/BaseIcon'

export default {
  name: 'Notification',
  components: {
    BaseIcon
  },
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
  .c-pointer {
    cursor: pointer;
  }
</style>