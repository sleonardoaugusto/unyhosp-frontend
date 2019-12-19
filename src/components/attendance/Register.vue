<template>
  <div class="d-flex flex-wrap justify-content-center align-items-center flex-column">
    <div class="col-md-6 mb-3">
      <div class="row">
        <h2 class="type-h4 type-light-green">Registrar atendimento</h2>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row d-flex flex-column mb-3">
        <label for="PacientName">Paciente:</label>
        <input type="text" id="PacientName" :input="inputValue" @input="getPacients">
      </div>
    </div>
  </div>
</template>

<script>
import PacientService from '@/services/PacientService'

export default {
  props: ['hospitalId'],
  name: 'Register',
  data: () => ({
    inputValue: '',
    pacients: []
  }),
  methods: {
    async getPacients() {
      this.pacients = await PacientService.getPacients()
    }
  }
}
</script>

<style scoped>

</style>