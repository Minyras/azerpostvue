<script setup lang="ts">
import sidebarImg from "../assets/image/sidebarimg.png";
import pattern from "../assets/image/pattern.png";
</script>

<template>
  <div class="sidebar">
    <div class="sidebarImg">
      <img class="mainImg" :src="sidebarImg" alt="" />
      <img class="pattern" :src="pattern" alt="" />
    </div>
    <div class="welcome">
      <h1 class="welcome-heading">Xoş gəlmişsiniz</h1>
      <p class="welcome-info">
        Azərpoçt-da şəxsi kabinet yaratmaqla siz sürətli ödənişlər və köçürmələr
        edə, xərclərinizə və gəlirlərinizə nəzarət edə bilərsiniz
      </p>
    </div>
  </div>
</template>
<style lang="scss">
.sidebar {
  background-color: #003f6d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 55%;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}
.sidebarImg {
  display: flex;
  align-items: center;
  justify-content: center;
}
.sidebarImg {
  .pattern {
    position: absolute;
    left: 0;
    top: 0;
    width: 95%;
    height: 95%;
    object-fit: cover;
  }
  .mainImg {
    width: 60%;
  }
}
.welcome {
  width: 60%;
  text-align: center;
}
.welcome-heading {
  font-size: 40px;
  font-weight: 800;
}
.welcome-info {
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
}
</style>
