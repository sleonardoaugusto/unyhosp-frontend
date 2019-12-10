<template>
  <div class="col-md-12">
    <div class="row d-flex justify-content-center">
      <h1>Paciente</h1>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="row">
        <label for="PacientName">Nome:</label>
        <input type="text" id="PacientName" v-model="attendance.pacient.name">
      </div>
    </div>
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

<style scoped>

</style>