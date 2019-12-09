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
    const hospitalId = this.$route.params.hospitalId
    this.utis = utis.data.filter(u => u.hospital_id == hospitalId)
  }
}
</script>

<style scoped>

</style>