<template>
  <div class="col-md-12 d-flex justify-content-center flex-wrap">
    <router-link
      v-for="(u, i) in utis"
      :key="i"
      class="card col-md-5"
      :to="{name: 'uti-beds', params: {utiId: u.id}}"
    >
      <p class="card__name">{{ u.name }}</p>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'UTIList',
  data: () => ({
    utis: []
  }),
  created() {
    const hospitalId = this.$route.params.hospitalId
    /* TODO
    *   Get hospital by id*/
  }
}
</script>

<style scoped>

</style>