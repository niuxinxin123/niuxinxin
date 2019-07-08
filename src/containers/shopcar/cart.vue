<template>
  <div>
    <div class="float-left">
      总价：
      <span class="text-red" v-text="summary"></span>
    </div>
    <div class="float-right">
      总数：
      <span class="text-red" v-text="total"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    summary: {
      default: 0
    },
    total: {
      default: 0
    }
  }
};
</script>

<style>
</style>
