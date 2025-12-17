<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

import CategoryComponent from "./components/CategoryComponent.vue";
import PosterComponent from "./components/PosterComponent.vue";

// ---- TYPES ----
interface Category {
  id: number;
  name: string;
  image: string;
  productCount: number;
  color: string;
  hoverColor: string;   // <<< FIXED HERE
}

interface Promotion {
  id: number;
  title: string;
  image: string;
  color: string;
  buttonColor: string;
  bgColor: string;
}


// ---- REFS ----
const categories = ref<Category[]>([]);
const promotions = ref<Promotion[]>([]);

// ---- API CALLS ----
async function fetchCategories() {
  const res = await axios.get<Category[]>("http://localhost:3000/api/categories");
  categories.value = res.data;
}

async function fetchPromotions() {
  const res = await axios.get<Promotion[]>("http://localhost:3000/api/promotions");
  promotions.value = res.data;
}

// ---- EVENT ----
function shopNow(promo: Promotion) {
  alert(`Let's shop ${promo.title}`);
}

// ---- LIFECYCLE ----
onMounted(() => {
  fetchCategories();
  fetchPromotions();
});
</script>

<template>
  <main>
    <div class="category_list">
      <CategoryComponent
        v-for="c in categories"
        :key="c.id"
        :img="c.image"
        :name="c.name"
        :count="c.productCount"
        :prefix="'item(s)'"
        :color="c.color"
        :hover="c.hoverColor"
      />
    </div>

    <div class="poster_list">
      <PosterComponent
        v-for="p in promotions"
        :key="p.id"
        :img="p.image"
        :title="p.title"
        :data="p"
        :buttonColor="p.buttonColor"
        :bgColor="p.color"
        @shop="shopNow"
      />
    </div>
  </main>
</template>

<style>
.category_list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;

  padding: 30px 0;
  flex-wrap: nowrap; /* IMPORTANT → KEEP IN ONE LINE */
  overflow-x: auto;  /* Allow scroll if too many */
  scrollbar-width: none; /* Hide scroll bar */
}

.category_list::-webkit-scrollbar {
  display: none; /* Hide scroll bar for Chrome */
}
.poster_list {
  display: flex;
  justify-content: center;
  gap: 25px;
  padding: 20px 0;
}
</style>
