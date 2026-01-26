<script setup lang="ts">
import { onMounted, computed, ref } from "vue"
import { useProductStore } from "./stores/productStore"

import CategoryComponent from "./components/CategoryComponent.vue"
import PosterComponent from "./components/PosterComponent.vue"
import ProductComponent from "./components/ProductComponent.vue"
import MenuComponent from "./components/MenuComponent.vue"

const store = useProductStore()
const currentGroup = ref("All")

const categories = computed(() => store.categories)
const promotions = computed(() => store.promotions)

// menu groups
const menuGroups = computed(() => [
  "All",
  ...new Set(store.products.map((p: any) => p.group))
])

// popular products
const popularProducts = computed(() =>
  store.getPopularProducts
)

// products filtered by menu
const filteredProducts = computed(() =>
  currentGroup.value === "All"
    ? popularProducts.value
    : store.products.filter((p: any) => p.group === currentGroup.value)
)

onMounted(() => {
  store.loadAll()
})

function shopNow(promo: any) {
  alert(`Let's shop ${promo.title}`)
}
</script>


<template>
  <main>
    <!-- Featured Categories Header -->
<div class="section_header">
  <h2 class="section_title">Featured Categories</h2>

  <MenuComponent
    :groups="menuGroups"
    :activeGroup="currentGroup"
    @change="currentGroup = $event"
  />
</div>
    <!-- Categories -->
    <div class="category_list">
      <CategoryComponent
        v-for="c in categories"
        :key="c.id"
        :img="c.image"
        :name="c.name"
        :count="c.productCount"
        prefix="item(s)"
        :color="c.color"
        :hoverColor="c.hoverColor"
      />
    </div>

    <!-- Promotions -->
    <div class="poster_list">
      <PosterComponent
        v-for="p in promotions"
        :key="p.id"
        :img="p.image"
        :title="p.title"
        :buttonColor="p.buttonColor"
        :bgColor="p.color"
        @shop="shopNow"
      />
    </div>

    <!-- Popular Products Header -->
    <div class="section_header">
      <h2 class="section_title">Popular Products</h2>

      <MenuComponent
        :groups="menuGroups"
        :activeGroup="currentGroup"
        @change="currentGroup = $event"
      />
    </div>

    <!-- Products -->
    <div class="product_grid">
      <ProductComponent
        v-for="p in filteredProducts"
        :key="p.id"
        :product="p"
      />
    </div>
  </main>
</template>



<style>
.category_list {
  display: flex;
  justify-content: center;
  gap: 25px;
  padding: 30px 0;
  overflow-x: auto;
  scrollbar-width: none;
}
.category_list::-webkit-scrollbar {
  display: none;
}

.poster_list {
  display: flex;
  justify-content: center;
  gap: 25px;
  padding: 20px 0;
}


.section_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 20px;
}

.section_title {
  font-size: 22px;
  font-weight: 600;
}

.product_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
  padding-bottom: 40px;
}


</style>
