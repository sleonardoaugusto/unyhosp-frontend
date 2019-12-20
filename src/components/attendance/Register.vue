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
        <input type="text" id="PacientName" v-model="inputValue" @input="searchPacients">
        <ul v-show="showDropdown" class="live-search__dropdown">
          <li class="live-search__item" v-for="(p, i) in pacients" :key="i" @click="setPacient(p)">{{ p.name }}</li>
        </ul>
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
    pacients: [],
    showDropdown: false
  }),
  methods: {
    async searchPacients() {
      this.showDropdown = true

      await PacientService.getPacients()
        .then((res) => {
          this.pacients = res.data
        })
    },
    setPacient(value) {
      this.inputValue = value.name
      this.showDropdown = false
    }
  }
}
</script>

<style scoped>

</style>