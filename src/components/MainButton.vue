<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  logout: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button :class="logout ? 'logout' : ''">{{ text }}</button>
</template>

<style scoped>
button {
  padding: 10px 20px;
  background-color: var(--muted-red);
  color: var(--soft-black);
  border: none;
  border-radius: var(--main-radius);
  cursor: pointer;
  align-self: center;
  font-weight: 700;
}

.logout {
  background-color: var(--muted-red);
}
</style>
