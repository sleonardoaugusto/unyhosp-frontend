<template>
  <div class="col-md-12 d-flex justify-content-center flex-wrap">
    <bed-card v-for="(b, i) in beds" :bed="b" :key="i"/>
  </div>
</template>

<script>
import beds from '@/mocks/beds'
import BedCard from '@/components/BedCard'

export default {
  name: 'BedList',
  components: {
    BedCard
  },
  data: () => ({
    beds: []
  }),
  created() {
    this.beds = beds.data
  }
}
</script>

<style scoped>

</style>