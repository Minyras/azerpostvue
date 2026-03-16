<script lang="ts">
import LoginSidebar from "./LoginSidebar.vue";

export default {
  components: {
    LoginSidebar,
  },
};
</script>
<template>
  <div class="loginLayout">
    <LoginSidebar />
    <RouterView />
  </div>
</template>
<style lang="scss">
.loginLayout {
  height: 100vh;
  display: flex;
  padding: 23px;
  overflow: hidden;
}
</style>
