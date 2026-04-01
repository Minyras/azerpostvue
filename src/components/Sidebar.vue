<script setup lang="ts">
import { ref } from "vue";
import logo from "../assets/image/logoWhite.png";
const openSections = ref<string[]>([]);

const toggleSection = (sectionName: string) => {
  if (openSections.value.includes(sectionName)) {
    openSections.value = openSections.value.filter((s) => s !== sectionName);
  } else {
    openSections.value.push(sectionName);
  }
};
</script>

<template>
  <div class="mainSidebar">
    <div class="sidebarLogo">
      <img :src="logo" alt="" />
    </div>
    <nav>
      <p>Ana səhifə</p>

      <ul>
        <li>
          <div class="title" @click="toggleSection('odenis')">
            Ödəniş tapşırıqları
          </div>
          <ul v-show="openSections.includes('odenis')">
            <li>Bütün əməliyyatlar</li>
            <li>Hesablararası köçürmələr</li>
            <li>Qurum daxili köçürmələr</li>
            <li>Ölkədaxili köçürmələr</li>
            <li>Ölkəxarici köçürmələr</li>
          </ul>
        </li>
      </ul>

      <p>Ödəniş sistemləri</p>
      <p>Kartlar və hesablar</p>
      <p>Kreditlər</p>
      <p>Əmanətlər</p>
      <p>Əmək haqqı layihəsi</p>
      <p>Valyuta mübadiləsi</p>
      <p>Ani Ödəniş sistemi</p>
      <p>Şablonlar</p>
    </nav>
  </div>
</template>

<style lang="scss">
.mainSidebar {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 17%;
  min-width: 17.5%;
  background-color: #003f6d;
  padding: 20px 30px;
  gap: 40px;
  overflow-y: auto;
  border-radius: 16px;
  font-size: 14px;

  .sidebarLogo {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #ffffff33;
    img {
      width: 81%;
      margin-left: 13px;
      margin-bottom: 18px;
      padding: 10px;
    }
  }

  nav {
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 15px;
      list-style: none;

      li {
        .title {
          cursor: pointer;
          padding: 5px 0;
        }
        ul {
          margin-left: 15px;
          list-style: none;
          li {
            padding: 3px 0;
          }
        }
      }
    }
  }
}
</style>
