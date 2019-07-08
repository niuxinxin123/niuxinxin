<template>
  <div class="scroll-wraper" :ref="scrollWraper">
    <div class="scroll-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  name: 'v-Scroll',
  props: {
    enableToElement: false,
    scrollWraper: {
      type: String,
      default: 'scrollWraper'
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs[this.scrollWraper], {
      click: document.body.width >= 768 ? false : true,
      scrollbar: this.isScrll,
    });
  },
  methods: {
    refresh() {
      if (this.scroll) {
        this.scroll.refresh();
      }
    },
    scrollToElement(...reset) {
      this.scroll.scrollToElement.apply(this.scroll, reset);
    },
  },
};
</script>

<style scoped>
.scroll-wraper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
