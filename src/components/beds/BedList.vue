<template>
  <div class="col-md-12 d-flex justify-content-center flex-wrap">
    <bed-card v-for="(b, i) in beds" :bed="b" :key="i"/>
  </div>
</template>

<script>
import BedCard from '@/components/beds/BedCard'

export default {
  name: 'BedList',
  components: {
    BedCard
  },
  data: () => ({
    beds: []
  }),
  created() {
    /* TODO
    *   Get beds*/
  }
}
</script>

<style scoped>

</style>