<template>
  <div class="d-flex flex-wrap justify-content-center align-items-center flex-column">
    <div class="col-md-6 mb-3">
      <h2 class="type-h4 type-blue-smoke">Cadastrar Hospital</h2>
    </div>
    <form @submit.prevent="submit" class="col-md-6">
      <div class="form-group" :class="{ 'form-group--error': $v.uti.name.$error }">
        <label class="form__label" for="UTIName">Nome:</label>
        <input class="form__input" type="text" id="UTIName" v-model.trim="$v.uti.name.$model">
        <div v-if="!$v.uti.name.required" class="error--message">Campo obrigatório</div>
      </div>
      <button class="button button-green" type="submit">CADASTRAR</button>
    </form>
  </div>
</template>

<script>
import UTIService from '@/services/UTIService'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'HospitalRegister',
  props: ['hospitalId'],
  data: () => ({
    uti: {
      name: ''
    }
  }),
  validations: {
    uti: {
      name: { required }
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const data = {
          name: this.uti.name,
          hospital: this.hospitalId
        }
        UTIService.post(data)
      }
    }
  }
}
</script>

<style scoped>

</style>