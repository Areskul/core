<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
import { elevation, border, dimension } from "../../mixins/style.js";
import { color } from "@areskul/palette/palette.js";
export default Vue.extend({
  name: "card",
  mixins: [color, elevation, border, dimension],
});
</script>
