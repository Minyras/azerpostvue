<script lang="ts">
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>
<template>
  <div class="mainLayout">
    <Sidebar />
    <RouterView />
  </div>
</template>
<style lang="scss">
.mainLayout {
  display: flex;
  padding: 12px;
  overflow: hidden;
  height: 100vh;
}
</style>
