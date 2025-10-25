<script setup lang="ts">
// import CategoryComponent from "@/components/CategoryComponent.vue";
console.log("This should be no error")
</script>

<template>

  <main>
    <!--    <CategoryComponent/>-->
    <h1 style="color: lightskyblue ">This is my first VueJs project</h1>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
