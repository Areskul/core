<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
import { border, dimension } from "../../mixins/style";
import { color, text } from "@areskul/palette/palette";
import { elevation } from "@areskul/elevation/elevation";
export default Vue.extend({
  name: "card",
  mixins: [color, text, elevation, border, dimension],
});
</script>
