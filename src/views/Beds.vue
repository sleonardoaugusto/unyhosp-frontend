<template>
  <div class="col-md-12">
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center">
        <h1 class="type-h3 type-blue-smoke">Leitos</h1>
      </div>
    </div>
    <div v-if="showList" class="row">
      <bed-list/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import BedList from '@/components/beds/BedList'

export default {
  name: 'home',
  components: {
    BedList
  },
  computed: {
    showList() {
      return this.$route.name === 'beds'
    }
  }
}
</script>
