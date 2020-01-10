<template>
  <div class="d-flex flex-wrap justify-content-center align-items-center flex-column">
    <div class="col-md-6 mb-3">
      <h2 class="type-h4 type-blue-smoke">Registrar atendimento</h2>
    </div>
    <form @submit.prevent="submit" class="col-md-6">
      <div class="form-group">
        <label class="form__label" for="PacientName">Paciente:</label>
        <input class="form__input" type="text" id="PacientName" v-model="inputValue" @input="searchPacients">
        <ul v-show="showDropdown" class="live-search__dropdown">
          <li class="live-search__item" v-for="(p, i) in pacients" :key="i" @click="setPacient(p)">{{ p.name }}</li>
          <router-link tag="li" :to="{name: 'pacientRegister'}" class="live-search__item type-blue-smoke type-h8">
            Novo Paciente +
          </router-link>
        </ul>
      </div>
    </form>
    <button class="button button-grey" type="submit">CADASTRAR</button>
  </div>
</template>

<script>
import PacientService from '@/services/PacientService'

export default {
  props: ['hospitalId'],
  name: 'AttendanceRegister',
  data: () => ({
    inputValue: '',
    pacients: [],
    showDropdown: false
  }),
  methods: {
    async searchPacients() {
      this.showDropdown = true

      await PacientService.getByName(this.inputValue)
        .then((res) => {
          this.pacients = res.data
        })
    },
    setPacient(value) {
      this.inputValue = value.name
      this.showDropdown = false
    },
    submit() {
      return
    }
  }
}
</script>

<style scoped>

</style>