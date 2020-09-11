<template>
  <transition mode="out-in" enter-active-class="fade-in-fwd" leave-active-class="fade-out-bck">
    <card v-show="show" class="floating" color="bg" text="ternary" elevation="4" rounded>
      Ceci est un menu
      <slot />
      <switcher />
    </card>
  </transition>
</template>
<script>
import card from "./card";
import switcher from "../buttons/switcher";
import { position } from "../../mixins/grid";
export default {
  mixins: [position],
  props: {
    show: Boolean,
    in: String,
    out: String
    // nav: Array
  },
  data: () => ({
    nav: [
      { route: "/Home", name: "Accueil" },
      { route: "/Cart", name: "Panier" }
    ]
  }),
  computed: {
    isVisible: function() {
      return this.show;
    }
  },
  components: {
    card,
    switcher
  }
};
</script>
<style scoped>
.floating {
  position: fixed;
  /* float: unset; */
  z-index: 1;
  display: inline-block;
  white-space: nowrap;
}
</style>
