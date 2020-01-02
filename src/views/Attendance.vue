<template>
  <div class="col-md-12">
    <div class="row d-flex justify-content-center">
      <h1 class="type-h2 type-blue-smoke">Atendimento</h1>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Pacient',
  data: () => ({
    attendance: {}
  })
}
</script>

<style scoped lang="scss">

</style>