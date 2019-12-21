<template>
  <div class="d-flex flex-wrap justify-content-center align-items-center flex-column">
    <div class="col-md-6 mb-3">
      <div class="row">
        <h2 class="type-h4 type-blue-smoke">Cadastrar Paciente</h2>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label class="form__label" for="PacientName">Paciente:</label>
        <input class="form__input" type="text" id="PacientName" v-model.trim="data.name">
      </div>
      <div class="form-group">
        <label class="form__label" for="DocumentId">CPF:</label>
        <the-mask class="form__input" type="text" id="DocumentId" mask="###.###.###-##"
                  v-model.trim="data.document_id"/>
      </div>
      <div class="form-group" :class="{ 'form-group--error': !$v.data.email.email }">
        <label class="form__label" for="Email">Email:</label>
        <input class="form__input" type="text" id="Email" v-model.trim="$v.data.email.$model">
        <div v-if="!$v.data.email.email" class="error--message">Email inválido</div>
      </div>
      <div class="form-group">
        <label class="form__label" for="DateOfBirth">Data de Nascimento:</label>
        <input class="form__input" type="tel" id="DateOfBirth" v-mask="'##/##/####'" v-model.trim="data.date_of_birth">
      </div>
    </div>
    <div class="col-md-6">
      <div class="row">
        <button class="button button-grey" @click="registerPacient">CADASTRAR</button>
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