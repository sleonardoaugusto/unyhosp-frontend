<template>
  <div class="col-md-12">
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center">
        <h1 class="type-h3 type-blue-smoke">Hospitais</h1>
      </div>
    </div>
    <div class="row">
      <hospital-list/>
    </div>
  </div>
</template>

<script>
import HospitalList from '@/components/hospitals/HospitalList'

export default {
  name: 'home',
  components: {
    HospitalList
  }
}
</script>
