<template>
  <b-switch v-model="isDark">Dark Mode</b-switch>
</template>
<script>
import Vue from "vue";
import theme from "@/core/mixins/theme.js";
export default Vue.extend({
  name: "switcher",
  mixins: [theme]
});
</script>
