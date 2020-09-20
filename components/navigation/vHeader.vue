<template>
  <div v-scroll="handleScroll" class="sticky-header" :class="[elevate ? 'shadow' : 'no-shadow' ]">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "v-header",
  data: () => ({
    elevate: false,
  }),
  methods: {
    handleScroll: function (evt: Event) {
      if (window.scrollY >= 50) {
        this.elevate = true;
      } else {
        this.elevate = false;
      }
    },
  },
});
</script>

<style lang="scss">
.shadow {
  box-shadow: var(--box4);
}
.no-shadow {
  box-shadow: none;
  transition: box-shadow ease 1000ms;
}
.sticky-header {
  position: sticky;
  top: 0px;
  z-index: 1;
  transition: box-shadow ease 300ms;
}
</style>
