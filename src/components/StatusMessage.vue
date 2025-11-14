<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  error: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <p :class="error ? 'error' : ''">{{ text }}</p>
</template>

<style scoped>
p {
  color: var(--success-color);
}

.error {
  color: var(--error-color);
}
</style>
