<template>
  <div class="col-md-12 d-flex justify-content-center flex-wrap">
    <router-link
      v-for="(u, i) in utis"
      :key="i"
      class="card col-md-3"
      :to="{name: 'beds', params: {utiId: u.id}}"
    >
      <div class="row mb-5">
        <p class="card__name">{{ u.name }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import UTIService from '@/services/UTIService'

export default {
  name: 'UTIList',
  data: () => ({
    utis: []
  }),
  created() {
    const id = this.$route.params.hospitalId
    UTIService.getByHospitalId(id)
      .then((res) => {
        this.utis = res.data
      })
  }
}
</script>

<style scoped>

</style>