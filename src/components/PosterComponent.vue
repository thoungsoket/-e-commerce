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
  new PosterItem("imgs/cate_item_1.png", "Poster 1 with the item short description", "Button", "red", "white"),
  new PosterItem("imgs/cate_item_1.png", "Poster 1 with the item short description", "Button", "red", "white"),
  new PosterItem("imgs/cate_item_1.png", "Poster 1 with the item short description", "Button", "red", "white"),
  new PosterItem("imgs/cate_item_1.png", "Poster 1 with the item short description", "Button", "red", "white"),
]

</script>

<template>
  <div class="poster_list" role="list">
    <div v-for="item in item_poster" class="poster_item" role="listitem" :key="item.label">
      <div class="poster_main">
        <span class="poster_label">{{ item.label }}</span>
        <button class="poster_btt" :style="{ '--bg': 'red', '--hover': 'blue' }">
          <span class="poster_btt_label">Shop Now</span>
          <img class="poster_btt_icon" src="/right-arrow.png" alt="Poster image">
        </button>
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
.poster_btt{
  height: 40px;
  min-width: 120px;
  align-content: center;
  align-items: center;
  background-color: var(--bg);
  color: white;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  border: none;
}

.poster_btt_icon{
  margin-left: 8px;
  width: 20%;
  height: 20%;
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
