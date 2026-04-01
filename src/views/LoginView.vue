<script lang="ts">
import Input from "@/components/Input.vue";
import LoginFooter from "@/components/LoginFooter.vue";
import LoginHeader from "@/components/LoginHeader.vue";
import visibleSvg from "../assets/svg/eyeVisible.svg";
import hiddenSvg from "../assets/svg/eyeHidden.svg";
import Button from "@/components/Button.vue";

export default {
  components: {
    LoginHeader,
    LoginFooter,
    Input,
    Button,
  },
  data() {
    return {
      passwordVisible: false,
      visibleSvg,
      hiddenSvg,
      activeTab: "otp",
      username: "",
      password: "",
    };
  },
  computed: {
    loading(): boolean {
      return this.$store.state.auth.loading;
    },
    error(): string | null {
      return this.$store.state.auth.error;
    },
  },
  methods: {
    togglePassword() {
      this.passwordVisible = !this.passwordVisible;
      console.log(this.username, this.password);
    },
    async handleLogin(): Promise<void> {
      await this.$store.dispatch("auth/login", {
        username: this.username,
        password: this.password,
      });

      if (this.$store.getters["auth/isAuthenticated"]) {
        this.$router.push("/home");
      }
    },
  },
};
</script>

<template>
  <div class="login-container">
    <div class="login-layout">
      <LoginHeader />

      <div class="login">
        <h2 class="login-heading">Şəxsi kabinetə giriş</h2>
        <div class="login-buttons">
          <button
            :class="{ active: activeTab === 'otp' }"
            @click="activeTab = 'otp'"
          >
            OTP giriş
          </button>
        </div>

        <div class="login-input">
          <Input
            type="text"
            name="username"
            label="İstifadəçi adı və ya e-mail"
            @change="(value) => (username = value)"
          />

          <div class="password">
            <Input
              :type="passwordVisible ? 'text' : 'password'"
              name="password"
              label="Şifrə"
              @change="(value) => (password = value)"
            />

            <img
              :src="passwordVisible ? visibleSvg : hiddenSvg"
              class="eyeIcon"
              alt="toggle"
              @click="togglePassword"
            />
          </div>
        </div>
        <Button
          name="Giriş"
          type="submit"
          className="blue"
          @click="handleLogin"
        />
      </div>

      <LoginFooter />
    </div>
  </div>
</template>

<style lang="scss">
.login-input {
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 20px;
  margin-bottom: 20px;
}
.login-layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 100vh;
}

.login-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 43%;
}
.login {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: scroll;
}
.login-heading {
  color: #334155;
  font-size: 32px;
  font-weight: 700;
}
.login-buttons {
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-buttons button {
  font-size: 16px;
  background-color: transparent;
  border: none;
  width: 33%;
  padding: 20px 0 0 0;
  font-weight: 600;
  color: #194bfb;
}

.password {
  position: relative;
}

.eyeIcon {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
