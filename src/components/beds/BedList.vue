<template>
  <div class="col-md-12 d-flex justify-content-center flex-wrap">
    <bed-card v-for="(b, i) in beds" :bed="b" :key="i"/>
  </div>
</template>

<script>
import BedCard from '@/components/beds/BedCard'
import Bedservice from '@/services/Bedservice'

export default {
  name: 'BedList',
  components: {
    BedCard
  },
  data: () => ({
    beds: []
  }),
  created() {
    Bedservice.get()
      .then((res) => {
        this.beds = res.data
      })
  }
}
</script>

<style scoped>

</style>