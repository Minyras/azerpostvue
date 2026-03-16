<script lang="ts">
import type { PropType } from "vue";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<"button" | "submit" | "reset">,
      default: "button",
    },
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <button :type="type" :class="className">
    {{ name }}
    <slot />
  </button>
</template>

<style lang="scss">
.blue {
  font-size: 16px;
  background-color: #003f6d;
  color: white;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
}
</style>
