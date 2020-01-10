<template>
  <div class="d-flex flex-wrap justify-content-center align-items-center flex-column">
    <div class="col-md-6 mb-3">
      <h2 class="type-h4 type-blue-smoke">Cadastrar Hospital</h2>
    </div>
    <form @submit.prevent="submit" class="col-md-6">
      <div class="form-group" :class="{ 'form-group--error': $v.hospital.name.$error }">
        <label class="form__label" for="HospitalName">Nome:</label>
        <input class="form__input" type="text" id="HospitalName" v-model.trim.lazy="$v.hospital.name.$model">
        <div v-if="!$v.hospital.name.required" class="error--message">Campo obrigatório</div>
      </div>
      <button class="button button-grey" type="submit">CADASTRAR</button>
    </form>
  </div>
</template>

<script>
import HospitalService from '@/services/HospitalService'
import { mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'HospitalRegister',
  data: () => ({
    hospital: {
      name: ''
    }
  }),
  validations: {
    hospital: {
      name: { required }
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        HospitalService.post(this.hospital)
          .then(() => {
            const payload = { message: 'Cadastro realizado!', type: 'success' }
            this.add(payload)
          })
      }
    },
    ...mapActions({
      add: 'notification/add'
    })
  }
}
</script>

<style scoped>

</style>