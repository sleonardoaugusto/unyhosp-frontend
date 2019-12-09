<template>
  <div class="card col-md-5">
    <p class="card__name">{{ bed.name }}</p>
    <div v-if="hasPacient" class="card__preview">
      <p class="card__text-content">
        Paciente:
        <span>{{ bed.pacient.name }}</span>
      </p>
      <p class="card__text-content">
        Data:
        <span>{{ bed.date }}</span>
      </p>
      <p class="card__text-content">
        Diagnóstico:
        <span>{{ bed.pacient.diagnostic }}</span>
      </p>
      <p class="card__text-content">
        Data:
        <span>{{ bed.pacient.health_plan }}</span>
      </p>
    </div>
    <div v-else>
      <p class="card__text-content">
        Vazio
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BedCard',
  props: {
    bed: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  computed: {
    hasPacient() {
      return this.bed.pacient
    }
  }
}
</script>

<style scoped>

</style>