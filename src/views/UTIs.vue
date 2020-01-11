<template>
  <div class="col-md-12">
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center">
        <h1 class="type-h3 type-blue-smoke">UTIs</h1>
      </div>
    </div>
    <div class="row">
      <u-t-i-list/>
    </div>
  </div>
</template>

<script>
import UTIList from '@/components/UTIs/UTIList'

export default {
  name: 'UTI',
  components: {
    UTIList
  }
}
</script>

<style scoped>

</style>