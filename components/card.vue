<template>
  <div class="px-0">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
import styles from "@/core/mixins/styles.js";
export default Vue.extend({
  name: "card",
  mixins: [styles],
});
</script>
<style>
</style>
