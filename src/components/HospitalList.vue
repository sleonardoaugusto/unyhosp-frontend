<template>
  <div class="col-md-12 d-flex justify-content-center flex-wrap">
    <router-link
      v-for="(h, i) in hospitals"
      :key="i"
      class="card col-md-3"
      :to="{name: 'hospital-utis', params: {hospitalId: h.id}}"
    >
      <div class="row mb-5">
        <p class="card__name">{{ h.name }}</p>
      </div>
      <div class="row justify-content-between w-100">
        <span class="card__action type-blue">Novo atendimento</span>
        <span class="card__action type-yellow">Editar</span>
      </div>
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