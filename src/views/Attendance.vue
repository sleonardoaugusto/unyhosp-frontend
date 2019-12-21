<template>
  <div class="col-md-12">
    <div class="row d-flex justify-content-center">
      <h1 class="type-h2 type-blue-smoke">Atendimento</h1>
    </div>
    <router-view/>
  </div>
</template>

<script>
import attendance from '@/mocks/attendance'

export default {
  name: 'Pacient',
  data: () => ({
    attendance: {}
  }),
  created() {
    this.attendance = attendance.data
  }
}
</script>

<style scoped lang="scss">

</style>