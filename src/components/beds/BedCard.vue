<template>
  <router-link :to="{name: 'bed-detail', params: {bedId: bed.id}}" class="card col-md-3">
    <p class="card__name">{{ bed.name }}</p>
    <div v-if="hasPacient" class="card__preview">
      <p class="card__text-content">
        Paciente:
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
  </router-link>
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