<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    default: 20,
  },
})

const emit = defineEmits(['update:page'])

function goToPage(page) {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:page', page)
  }
}
</script>

<template>
  <div class="pagination-wrapper">
    <button class="nav-btn left" @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
      <span>‹</span>
    </button>
    <div class="pagination">
      <button
        v-for="page in totalPages"
        :key="page"
        :class="['page-btn', { active: page === currentPage }]"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
    </div>
    <button
      class="nav-btn right"
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
    >
      <span>›</span>
    </button>
  </div>
</template>

<style scoped>
.pagination-wrapper {
  position: relative;
  width: 100%;
}

.nav-btn {
  position: fixed;
  top: 50%;
  z-index: 9999;
  background: var(--dark-transparent);
  color: var(--warm-beige);
  border: 1px solid var(--warm-beige);
  padding: 12px 18px;
  font-size: 2rem;
  opacity: 0.5;
  border-radius: 50%;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    opacity 0.2s,
    transform 0.2s;
}

.nav-btn span {
  display: inline-block;
  transform: translateY(-2px);
}

.nav-btn:hover {
  opacity: 1;
}

.nav-btn.left {
  left: 20px;
}

.nav-btn.right {
  right: 20px;
}

.nav-btn:disabled {
  opacity: 0.2;
  cursor: not-allowed;
}

.pagination {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.5rem 0;
  justify-content: center;
}

.page-btn {
  padding: 8px 12px;
  border-radius: var(--main-radius);
  background: var(--soft-black);
  color: var(--warm-beige);
  border: 1px solid var(--warm-beige);
  cursor: pointer;
}

.page-btn:hover {
  background: var(--warm-beige);
  color: var(--soft-black);
}

.page-btn.active {
  background: var(--muted-red);
  color: white;
  border-color: var(--muted-red);
}
</style>
