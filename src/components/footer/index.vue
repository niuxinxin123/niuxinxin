<template>
  <footer class="footer">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'v-footer'
};
</script>

<style scoped>
.footer {
  padding: 15px;
  border-top: 1px solid #ccc;
}
</style>
