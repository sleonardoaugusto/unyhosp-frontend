<template>
  <div class="notification-bar" :class="notification.type">
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
  data: () => ({
    timeout: null
  }),
  mounted() {
    this.timeout = setTimeout(() => this.$emit('close-notification'), 5000)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
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