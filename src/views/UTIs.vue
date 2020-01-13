<template>
  <div class="col-md-12">
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center">
        <h1 class="type-h3 type-blue-smoke">UTIs</h1>
      </div>
    </div>
    <div v-if="showList" class="row">
      <router-link :to="{name: 'UTIRegister'}" class="button button-green">
        <BaseIcon name="plus-circle"/>
        Nova UTI
      </router-link>
      <u-t-i-list/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import UTIList from '@/components/UTIs/UTIList'
import BaseIcon from '@/components/common/BaseIcon'

export default {
  name: 'UTI',
  components: {
    UTIList,
    BaseIcon
  },
  computed: {
    showList() {
      return this.$route.name == 'UTIs'
    }
  }
}
</script>

<style scoped>

</style>