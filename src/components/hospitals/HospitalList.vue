<template>
  <div class="col-md-12 d-flex justify-content-center flex-wrap">
    <router-link
      v-for="(h, i) in hospitals"
      :key="i"
      class="card col-md-3"
      :to="{name: 'utis', params: {hospitalId: h.id}}"
    >
      <div class="row mb-5">
        <p class="card__name">{{ h.name }}</p>
      </div>
      <div class="row justify-content-between w-100">
        <router-link :to="{name: 'attendance-register', params: {hospitalId: h.id}}"
                     class="card__action type-green">Novo atendimento
        </router-link>
        <span class="card__action type-yellow">Editar</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import HospitalService from '@/services/HospitalService'

export default {
  name: 'HospitalList',
  data: () => ({
    hospitals: []
  }),
  created() {
    this.getData()
  },
  methods: {
    getData() {
      HospitalService.get()
        .then((res) => {
          this.hospitals = res.data
        })
    }
  }
}
</script>

<style scoped>

</style>