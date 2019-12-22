<template>
  <div class="d-flex flex-wrap justify-content-center align-items-center flex-column">
    <div class="col-md-6 mb-3">
      <h2 class="type-h4 type-blue-smoke">Cadastrar Paciente</h2>
    </div>
    <form @submit.prevent="submit" class="col-md-6">
      <div class="form-group" :class="{ 'form-group--error': $v.data.name.$error }">
        <label class="form__label" for="PacientName">Nome:</label>
        <input class="form__input" type="text" id="PacientName" v-model.trim.lazy="$v.data.name.$model">
        <div v-if="!$v.data.name.required" class="error--message">Campo obrigatório</div>
      </div>
      <div class="form-group" :class="{ 'form-group--error': $v.data.document_id.$error }">
        <label class="form__label" for="DocumentId">CPF:</label>
        <the-mask class="form__input" type="text" id="DocumentId" mask="###.###.###-##"
                  v-model.trim.lazy="$v.data.document_id.$model"/>
        <div v-if="!$v.data.document_id.required" class="error--message">Campo obrigatório</div>
        <div v-if="!$v.data.document_id.minLength" class="error--message">CPF inválido</div>
      </div>
      <div class="form-group" :class="{ 'form-group--error': $v.data.email.$error }">
        <label class="form__label" for="Email">Email:</label>
        <input class="form__input" type="text" id="Email" v-model.trim.lazy="$v.data.email.$model">
        <div v-if="!$v.data.email.required" class="error--message">Campo obrigatório</div>
        <div v-if="!$v.data.email.email" class="error--message">Email inválido</div>
      </div>
      <div class="form-group" :class="{ 'form-group--error': $v.data.date_of_birth.$error }">
        <label class="form__label" for="DateOfBirth">Data de Nascimento:</label>
        <input class="form__input" type="tel" id="DateOfBirth" v-mask="'##/##/####'"
               v-model.trim.lazy="$v.data.date_of_birth.$model">
        <div v-if="!$v.data.date_of_birth.required" class="error--message">Campo obrigatório</div>
      </div>
      <button class="button button-grey" type="submit">CADASTRAR</button>
    </form>
  </div>
</template>

<script>
import PacientService from '@/services/PacientService'
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Register',
  data: () => ({
    data: {
      name: '',
      document_id: '',
      email: '',
      date_of_birth: ''
    },
    submitStatus: null
  }),
  validations: {
    data: {
      name: { required },
      email: { required, email },
      document_id: { required, minLength: minLength(11) },
      date_of_birth: { required }
    }
  },
  methods: {
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          PacientService.post(this.data)
        }, 500)
      }
    }
  }
}
</script>

<style scoped>

</style>