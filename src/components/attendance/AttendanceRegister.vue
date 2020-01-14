<template>
  <div class="d-flex flex-wrap justify-content-center align-items-center flex-column">
    <div class="col-md-6 mb-3">
      <h2 class="type-h4 type-blue-smoke">Registrar atendimento</h2>
    </div>
    <form @submit.prevent="submit" class="col-md-6">
      <div class="form-group" :class="{ 'form-group--error': $v.pacientName.$error }">
        <label class="form__label" for="PacientName">Paciente:</label>
        <input class="form__input" type="text" id="PacientName" v-model.trim="$v.pacientName.$model"
               @input="searchPacients">
        <div v-if="!$v.pacientName.required" class="error--message">Campo obrigatório</div>
        <ul v-show="showDropdown" class="live-search__dropdown">
          <li class="live-search__item" v-for="(p, i) in pacients" :key="i" @click="setPacient(p)">{{ p.name }}</li>
          <router-link tag="li" :to="{name: 'pacient-register'}" class="live-search__item type-blue-smoke type-h8">
            Novo Paciente +
          </router-link>
        </ul>
      </div>
      <button class="button button-green" type="submit">CADASTRAR</button>
    </form>
  </div>
</template>

<script>
import PacientService from '@/services/PacientService'
import AttendanceService from '@/services/AttendanceService'
import { required } from 'vuelidate/lib/validators'


export default {
  name: 'AttendanceRegister',
  props: ['hospitalId'],
  data: () => ({
    pacientName: '',
    pacientId: '',
    pacients: [],
    showDropdown: false
  }),
  validations: {
    pacientName: { required }
  },
  methods: {
    async searchPacients() {
      this.showDropdown = true

      await PacientService.getByName(this.pacientName)
        .then((res) => {
          this.pacients = res.data
        })
    },
    setPacient(value) {
      this.pacientName = value.name
      this.pacientId = value.id
      this.showDropdown = false
    },
    submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {

        const data = {
          pacient: this.pacientId,
          hospital: this.hospitalId
        }

        AttendanceService.post(data)
      }
    }
  }
}
</script>

<style scoped>

</style>