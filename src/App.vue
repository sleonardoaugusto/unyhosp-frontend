<template>
  <div id="app" class="container d-flex justify-content-center">
    <router-link :to="{name: 'hospitals'}"></router-link>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import 'assets/main';
</style>
