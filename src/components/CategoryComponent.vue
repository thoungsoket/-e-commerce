<script setup lang="ts">
  class CategoryItem {
    img: string;
    name: string;
    count: number;
    prefix: string;

    constructor(img_link: string, name: string, count: number, prefix: string = "item(s)") {
      this.img = img_link;
      this.name = name;
      this.count = count;
      this.prefix = prefix;
    }
  }

  const item_category: CategoryItem[] = [
    new CategoryItem("https://picsum.photos/200/300", "Category 1", 10, "any"),
    new CategoryItem("https://picsum.photos/200/300", "Category 2", 10, "any"),
    new CategoryItem("https://picsum.photos/200/300", "Category 3", 10, "any"),
    new CategoryItem("https://picsum.photos/200/300", "Category 4", 10, "any"),
    new CategoryItem("https://picsum.photos/200/300", "Category 5", 10, "any"),
  ]

</script>

<template>
  <div class="category_list" role="list">
    <button
      v-for="item in item_category"
      :key="item.name"
      role="menuitem"
      type="button"
      class="category_btt"
    >
      <img class="category_img" :src="item.img" alt="Category image">>
      <span class="category_name">{{ item.name }}</span>
      <span class="category_count">{{ item.count }} {{ item.prefix }}</span>


    </button>

  </div>

</template>

<style scoped>

.category_list {
  display: flex;
  flex-direction: row;
}

.category_btt{
  width: 100px;
  height: 130px;
  margin: 10px;
}

.category_img {
  width: 80%;
  height: 80%;
}



</style>
