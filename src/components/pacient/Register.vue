<template>
  <div class="d-flex flex-wrap justify-content-center align-items-center flex-column">
    <div class="col-md-6 mb-3">
      <div class="row">
        <h2 class="type-h4 type-blue-smoke">Cadastrar Paciente</h2>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row d-flex flex-column mb-3">
        <label for="PacientName">Paciente:</label>
        <input type="text" id="PacientName" v-model.trim="data.name">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="DocumentId">CPF:</label>
        <the-mask type="text" id="DocumentId" mask="###.###.###-##" v-model.trim="data.document_id"/>
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="Email">Email:</label>
        <input type="text" id="Email" v-model.trim="$v.data.email.$model">
        <span v-if="!$v.data.email.email" class="error">Deu ruim</span>
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="DateOfBirth">Data de Nascimento:</label>
        <input type="tel" id="DateOfBirth" v-mask="'##/##/####'" v-model.trim="data.date_of_birth">
      </div>
    </div>
    <div class="col-md-6">
      <div class="row">
        <button class="button button-green" @click="registerPacient">CADASTRAR</button>
      </div>
    </div>
  </div>
</template>

<script>
import PacientService from '@/services/PacientService'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'Register',
  data: () => ({
    data: {
      name: '',
      document_id: '',
      email: '',
      date_of_birth: ''
    }
  }),
  validations: {
    data: {
      email: { required, email }
    }
  },
  methods: {
    registerPacient() {
      PacientService.post(this.data)
    }
  }
}
</script>

<style scoped>

</style>