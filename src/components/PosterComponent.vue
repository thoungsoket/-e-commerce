<script setup lang="ts">

class PosterItem {
  img: string;
  label: string;
  btt_label: string;
  btt_color: string;
  bg_color: string;

  constructor(img: string, label: string, btt_label: string, btt_color: string, bg_color: string) {
    this.img = img;
    this.label = label;
    this.btt_label = btt_label;
    this.btt_color = btt_color;
    this.bg_color = bg_color;
  }
}

const item_poster: PosterItem[] = [
  new PosterItem("imgs/cate_item_4.png", "Everyday fresh & clean with our product", "Button", "red", "white"),
  new PosterItem("imgs/cate_item_5.png", "Make your breakfast healthy and easy", "Button", "red", "white"),
  new PosterItem("imgs/cate_item_1.png", "The best organic product online from our store", "Button", "red", "white"),
  new PosterItem("imgs/cate_item_6.png", "Fruit is the best choice for our health", "Button", "red", "white"),
]

</script>

<template>
  <div class="poster_list" role="list">
    <div v-for="item in item_poster" class="poster_item" role="listitem" :key="item.label">
      <div class="poster_main">
        <span class="poster_label">{{ item.label }}</span>
        <ButtonComponent/>
      </div>
      <img class="poster_img" :src="item.img" alt="Poster image">

      >
    </div>
  </div>

</template>

<style scoped>
.poster_list{
  display        : flex;
  flex-direction : row;
  overflow-x     : scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  gap            : 24px;
  margin-top     : 24px;
}
.poster_main {
  margin-left    : 24px;
  display        : flex;
  flex-direction : column;
  align-items    : flex-start;
  justify-content: center;
  height         : 100%;
  width          : 100%;
}

.poster_label{
  font-size: 16px;
  font-weight: bold;
  color: #181818;
  margin-bottom: 16px;
}



.poster_item {
  display        : flex;
  flex-direction : row;
  align-items    : center;
  height         : 200px;
  width          : 300px;
  min-width      : 300px;
  background     : white;
  border-radius  : 8px;
}

</style>
