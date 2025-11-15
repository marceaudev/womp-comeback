<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
  filmImg: {
    type: String,
    default: null,
  },
})

const iconUrl = computed(() => {
  if (!props.icon) {
    return null
  } else {
    return new URL(`../assets/imgs/${props.icon}`, import.meta.url).href
  }
})
</script>

<template>
  <div class="heroBanner">
    <div class="infoBloc">
      <p>
        {{ text }} <span v-if="price">{{ price }}€</span>
      </p>
    </div>
    <div class="iconBloc" v-if="icon">
      <img :src="iconUrl" alt="Icone" />
    </div>
    <div class="filmImgBloc" v-if="filmImg">
      <img :src="filmImg" alt="Film Image" />
    </div>
  </div>
</template>

<style scoped>
.heroBanner {
  background-color: var(--dark-transparent);
  width: 100%;
  height: 100px;
  border-radius: var(--main-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20px 0;
}

.infoBloc,
.filmImgBloc {
  margin-left: 1rem;
  color: var(--warm-beige);
  font-size: 1.5rem;
  font-weight: bold;
}

span {
  color: var(--muted-coral);
}

.iconBloc {
  position: absolute;
  z-index: 1;
  right: 0;
  height: 120px;
}

.filmImgBloc {
  overflow: hidden;
  height: 90%;
  right: 0;
  border-radius: var(--main-radius);
}

.iconBloc img {
  height: 100%;
  transform: rotate(10deg);
}

.filmImgBloc img {
  height: 100%;
}
</style>
