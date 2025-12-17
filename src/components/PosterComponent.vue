<script setup lang="ts">
import ButtonComponent from "./ButtonComponent.vue";

defineProps<{
  img: string
  title: string
  buttonColor: string
  bgColor: string
}>()
</script>

<template>
  <div
    class="poster_item"
    :style="{ backgroundColor: bgColor }"
  >
    <div class="poster_main">
      <span class="poster_label">{{ title }}</span>

      <ButtonComponent
        :style="{ backgroundColor: buttonColor }"
      />
    </div>

    <img class="poster_img" :src="img" />
  </div>
</template>

<style scoped>
.poster_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  padding: 20px;
  width: 360px;
}

.poster_main {
  width: 60%;
}

.poster_label {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 12px;
  display: block;
}

.poster_img {
  width: 140px;
}
</style>
