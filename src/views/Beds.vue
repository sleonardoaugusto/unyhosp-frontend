<template>
  <div class="col-md-12">
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center">
        <h1>Leitos</h1>
      </div>
    </div>
    <div class="row">
      <bed-list/>
    </div>
  </div>
</template>

<script>
import BedList from '@/components/BedList'

export default {
  name: 'Bed',
  components: {
    BedList
  }
}
</script>

<style scoped>

</style>