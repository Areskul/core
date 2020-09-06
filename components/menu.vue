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
import switcher from "./switcher";
export default {
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
  },
  watch: {
    show() {
      console.log(this.show);
    }
  },
  methods: {
    debug: function() {
      console.log(this.show);
    }
  }
};
</script>
<style scoped>
.floating {
  position: absolute;
  /* float: unset; */
  top: 70px;
  right: 20px;
  z-index: 1;
  display: inline-block;
  white-space: nowrap;
}
</style>
