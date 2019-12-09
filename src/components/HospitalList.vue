<template>
  <div class="col-md-12 d-flex justify-content-center flex-wrap">
    <router-link
      v-for="(h, i) in hospitals"
      :key="i"
      class="card col-md-5"
      :to="{name: 'hospital-utis', params: {hospitalId: h.id}}"
    >
      <p class="card__name">{{ h.name }}</p>
    </router-link>
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