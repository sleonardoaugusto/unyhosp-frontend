<template>
  <div class="d-flex flex-wrap justify-content-center align-items-center flex-column">
    <div class="col-md-6 mb-3">
      <h2 class="type-h4 type-blue-smoke">Cadastrar Paciente</h2>
    </div>
    <form @submit.prevent="submit" class="col-md-6">
      <div class="form-group" :class="{ 'form-group--error': $v.pacient.name.$error }">
        <label class="form__label" for="PacientName">Nome:</label>
        <input class="form__input" type="text" id="PacientName" v-model.trim.lazy="$v.pacient.name.$model">
        <div v-if="!$v.pacient.name.required" class="error--message">Campo obrigatório</div>
      </div>
      <div class="form-group" :class="{ 'form-group--error': $v.pacient.document_id.$error }">
        <label class="form__label" for="DocumentId">CPF:</label>
        <the-mask class="form__input" type="text" id="DocumentId" mask="###.###.###-##"
                  v-model.trim.lazy="$v.pacient.document_id.$model"/>
        <div v-if="!$v.pacient.document_id.required" class="error--message">Campo obrigatório</div>
        <div v-if="!$v.pacient.document_id.minLength" class="error--message">CPF inválido</div>
      </div>
      <div class="form-group" :class="{ 'form-group--error': $v.pacient.email.$error }">
        <label class="form__label" for="Email">Email:</label>
        <input class="form__input" type="text" id="Email" v-model.trim.lazy="$v.pacient.email.$model">
        <div v-if="!$v.pacient.email.required" class="error--message">Campo obrigatório</div>
        <div v-if="!$v.pacient.email.email" class="error--message">Email inválido</div>
      </div>
      <div class="form-group" :class="{ 'form-group--error': $v.pacient.date_of_birth.$error }">
        <label class="form__label" for="DateOfBirth">Data de Nascimento:</label>
        <input class="form__input" type="text" id="DateOfBirth" v-mask="'##/##/####'"
               v-model.trim.lazy="$v.pacient.date_of_birth.$model">
        <div v-if="!$v.pacient.date_of_birth.required" class="error--message date">Campo obrigatório</div>
        <div v-if="!$v.pacient.date_of_birth.minLength" class="error--message date">Data inválida</div>
      </div>
      <button class="button button-grey" type="submit">CADASTRAR</button>
    </form>
  </div>
</template>

<script>
import PacientService from '@/services/PacientService'
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'PacientRegister',
  data: () => ({
    pacient: {
      name: '',
      document_id: '',
      email: '',
      date_of_birth: ''
    }
  }),
  validations: {
    pacient: {
      name: { required },
      email: { required, email },
      document_id: { required, minLength: minLength(11) },
      date_of_birth: { required, minLength: minLength(10) }
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        PacientService.post(this.pacient)
      }
    }
  }
}
</script>

<style scoped>

</style>