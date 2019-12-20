<template>
  <div class="notification-bar">
    <p class="notification-bar__message">
      <!--      <span class="notification-bar__close" @click="close">x</span>-->
      <BaseIcon name="users">
        <span slot="description"></span>
      </BaseIcon>
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

</style>