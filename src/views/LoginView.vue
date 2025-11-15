<script setup>
import HeroBanner from '@/components/HeroBanner.vue'
import LoginForm from '@/components/LoginForm.vue'
</script>

<template>
  <main class="wrapper">
    <div class="loginForm">
      <HeroBanner text="Identification" />
      <LoginForm />
    </div>
  </main>
  <div class="loginBg">
    <img src="../assets/imgs/login-bg.jpg" alt="Login Background" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--page-height);
  max-height: var(--page-height);
  position: relative;
  flex-direction: column;
}

.loginForm {
  background-color: var(--dark-transparent);
  width: 400px;
  padding: 20px;
  border-radius: var(--main-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(10px);
}

h2 {
  font-size: 1.2rem;
}

.loginBg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
  width: 100%;
  height: 100%;
  opacity: 0.3;
}

.loginBg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
