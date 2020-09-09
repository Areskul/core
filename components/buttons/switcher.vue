<template>
  <b-switch v-model="isDark" type="is-success">Dark Mode</b-switch>
</template>
<script>
import Vue from "vue";
import { metaTheme, theme } from "../../mixins/theme.js";
export default Vue.extend({
  name: "switcher",
  mixins: [metaTheme, theme],
});
</script>
