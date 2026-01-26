<script setup lang="ts">
defineProps({
  img: String,
  name: String,
  count: Number,
  prefix: {
    type: String,
    default: "item(s)"
  },
  color: String,
  hoverColor: String     // <<< FIXED
});
</script>

<template>
  <button
    class="category_btt"
    :style="{ '--bg': color, '--hover': hoverColor }"
  >
    <img class="category_img" :src="`http://localhost:3000/${img}`"/>
    <span class="category_name">{{ name }}</span>
    <span class="category_count">{{ count }} {{ prefix }}</span>
  </button>
</template>

<style>
.category_btt {
  width: 120px;
  height: 140px;
  padding: 12px;
  background: var(--bg);
  border-radius: 12px;
  border: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.2s;
}

.category_btt:hover {
  background: var(--hover);
  transform: translateY(-3px);
}

.category_img {
  width: 55px;
  height: 55px;
  object-fit: contain;
  margin-bottom: 5px;
}

.category_name {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 2px;
}

.category_count {
  font-size: 12px;
  color: #777;
}

</style>