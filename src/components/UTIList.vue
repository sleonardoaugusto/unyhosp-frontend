<template>
  <div class="col-md-12 d-flex justify-content-center flex-wrap">
    <div
      v-for="(u, i) in utis"
      :key="i"
      class="card col-md-5"
    >
      <p class="card__name">{{ u.name }}</p>
    </div>
  </div>
</template>

<script>
import utis from '@/mocks/utis'

export default {
  name: 'UTIList',
  data: () => ({
    utis: []
  }),
  created() {
    this.utis = utis.data
  }
}
</script>

<style scoped>

</style>