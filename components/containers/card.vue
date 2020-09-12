<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
import { color, elevation, border, dimension } from "../../mixins/style.js";
export default Vue.extend({
  name: "card",
  mixins: [color, elevation, border, dimension]
});
</script>
