<script setup lang="ts">
defineProps<{
  groups: string[]
  activeGroup: string
}>()

const emit = defineEmits<{
  (e: "change", group: string): void
}>()
</script>

<template>
  <div class="menu">
    <button
      v-for="g in groups"
      :key="g"
      :class="['menu_item', { active: g === activeGroup }]"
      @click="emit('change', g)"
    >
      {{ g }}
    </button>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  gap: 20px;
  margin: 30px 0 10px;
}

.menu_item {
  background: none;
  border: none;
  font-size: 15px;
  cursor: pointer;
  color: #555;
  position: relative;
}

.menu_item.active {
  color: #22c55e;
  font-weight: bold;
}

.menu_item.active::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #22c55e;
}
</style>
