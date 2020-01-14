<template>
  <div class="col-md-12">
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center">
        <h1 class="type-h3 type-blue-smoke">Hospitais</h1>
      </div>
    </div>
    <div v-if="showList" class="row">
      <router-link :to="{name: 'hospital-register'}" class="button button-green">
        <BaseIcon name="plus-circle"/>
        Novo Hospital
      </router-link>
      <hospital-list/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import HospitalList from '@/components/hospitals/HospitalList'
import BaseIcon from '@/components/common/BaseIcon'

export default {
  name: 'home',
  components: {
    HospitalList,
    BaseIcon
  },
  computed: {
    showList() {
      return this.$route.name == 'hospitals'
    }
  }
}
</script>
