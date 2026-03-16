<script lang="ts"></script>
<template>
  <header class="header">
    <img src="../assets/image/logo.png" alt="azerpostlogo" />
    <div class="langContainer">
      <button>AZ</button>
      <button>EN</button>
      <button>RU</button>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 40%;
  }
  .langContainer {
    display: flex;
    align-items: center;
    gap: 20px;
    button {
      border: none;
      background-color: transparent;
      font-size: 16px;
      font-weight: 500;
      color: #1e293b;
    }
  }
}
</style>
