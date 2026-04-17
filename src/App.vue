<script lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import Layout from "./components/Layout.vue";
import LoginLayout from "./components/LoginLayout.vue";
import Credit from "./components/Credit.vue";

export default {
  components: {
    Layout,
    LoginLayout,
    Credit,
  },
  setup() {
    const route = useRoute();

    const layout = computed(() => {
      return route.meta.layout === "login" ? "LoginLayout" : "Layout";
    });

    return { layout };
  },
};
</script>

<template>
  <component :is="layout" />
</template>
