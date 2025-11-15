<script setup>
import HeroBanner from '@/components/HeroBanner.vue'
import LoginForm from '@/components/LoginForm.vue'
</script>

<template>
  <main class="wrapper">
    <HeroBanner text="Bienvenue sur WOMP" :icon="'womp.png'" />
    <div class="loginForm">
      <h2>Identification</h2>
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
  max-height: var(--page-height);
  position: relative;
  flex-direction: column;
}

.loginForm {
  background-color: var(--dark-transparent);
  width: 300px;
  padding: 20px 0;
  border-radius: var(--main-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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
