<template>
  <div class="icon-wrapper">
    <svg class="icon" :width="width" :height="height">
      <use v-bind="{'xlink:href':'/feather-sprite.svg#'+name}"/>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 16
    },
    height: {
      type: [Number, String],
      default: 16
    }
  }
}
</script>

<style scoped>
  .icon-wrapper {
    display: inline-flex;
    align-items: center;
    color: #FFF;
    font-size: 1rem;
    font-weight: 600;
  }

  .icon {
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    margin-right: 6px;
  }
</style>