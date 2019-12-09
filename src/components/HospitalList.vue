<template>
  <div class="col-md-12 d-flex justify-content-center flex-wrap">
    <div v-for="(h, i) in hospitals" :key="i" class="card col-md-5">
      <p>{{ h.name }}</p>
    </div>
  </div>
</template>

<script>
import hospitals from '@/mocks/hospitals'

export default {
  name: 'HospitalList',
  data: () => ({
    hospitals: []
  }),
  created() {
    this.hospitals = hospitals.data
  }
}
</script>

<style scoped>

</style>