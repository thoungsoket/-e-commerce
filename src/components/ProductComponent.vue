<script setup lang="ts">
const props = defineProps<{
  product: any
}>()

const API = "http://localhost:3000"

function getProductImage(img: any) {
  if (!img) return ""

  // If backend sends JSON string
  if (typeof img === "string" && img.trim().startsWith("[")) {
    try {
      img = JSON.parse(img)[0]
    } catch {}
  }

  // If backend sends array
  if (Array.isArray(img)) {
    img = img[0]
  }

  // Fix Windows backslashes
  img = String(img).replaceAll("\\", "/")

  // If already full URL
  if (img.startsWith("http")) return img

  return `${API}/${img}`
}
</script>

<template>
  <div class="product_card">
    <!-- Discount badge -->
    <span
      v-if="Number(product.promotionAsPercentage) > 0"
      class="badge discount"
    >
      -{{ product.promotionAsPercentage }}%
    </span>

    <!-- Hot badge -->
    <span
      v-else-if="product.countSold > 30"
      class="badge hot"
    >
      Hot
    </span>

    <!-- Image -->
    <img
      class="product_img"
      :src="getProductImage(product.image)"
      alt="product"
    />

    <!-- Content -->
    <div class="product_info">
      <small class="brand">Hodo Foods</small>

      <h4 class="name">
        {{ product.name }}
      </h4>

      <!-- Rating -->
      <div class="rating">
        ⭐ {{ product.rating }} (4.0)
      </div>

      <!-- Price -->
      <div class="price_row">
        <span class="price">
          ${{ product.price }}
        </span>

        <span class="old_price">
          $2.80
        </span>

        <button class="add_btn">
          Add +
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product_card {
  width: 230px;
  background: #fff;
  border-radius: 12px;
  padding: 12px;
  position: relative;
  border: 1px solid #eee;
}

.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 20px;
  color: white;
}

.discount {
  background: #22c55e;
}

.hot {
  background: #ef4444;
}

.product_img {
  width: 100%;
  height: 150px;
  object-fit: contain;
}

.product_info {
  padding-top: 8px;
}

.brand {
  color: #999;
  font-size: 12px;
}

.name {
  font-size: 14px;
  margin: 6px 0;
}

.rating {
  font-size: 12px;
  color: #f59e0b;
}

.price_row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.price {
  color: #22c55e;
  font-weight: bold;
}

.old_price {
  text-decoration: line-through;
  font-size: 12px;
  color: #aaa;
}

.add_btn {
  margin-left: auto;
  background: #e6f9f0;
  border: none;
  color: #22c55e;
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
