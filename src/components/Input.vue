<script lang="ts">
export default {
  props: {
    type: String,
    name: String,
    label: String,
  },
  emits: ["change"],
};
</script>
<template>
  <div className="input-group">
    <input
      :type="type"
      :name="name"
      @input="$emit('change', $event.target.value)"
    />
    <label>{{ label }}</label>
  </div>
</template>
<style lang="scss">
.input-group {
  position: relative;
  width: 100%;
}

.input-group input {
  width: 100%;
  padding: 16px 12px;
  border: 1px solid #cdd5df;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  background: transparent;
  transition: 0.2s;
}

.input-group label {
  position: absolute;
  left: 12px;
  top: 16px;
  font-size: 14px;
  color: #94a3b8;
  pointer-events: none;
  transition: 0.2s ease;
  background: white;
  padding: 0 4px;
}

.input-group input:focus + label,
.input-group input:valid + label {
  top: -8px;
  font-size: 12px;
}
</style>
