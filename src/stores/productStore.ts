import { defineStore } from "pinia"
import axios from "axios"

export const useProductStore = defineStore("product", {
  state: () => ({
    groups: [],
    categories: [],
    promotions: [],
    products: []
  }),

  getters: {
    // ✅ Popular products
    getPopularProducts: (state) =>
      state.products.filter((p: any) => p.countSold > 10),

    // ✅ Products by group
    getProductsByGroup: (state) => {
      return (groupName: string) => {
        if (groupName === "All") return state.products
        return state.products.filter(
          (p: any) => p.group === groupName
        )
      }
    }
  },

  actions: {
    async loadAll() {
      const baseUrl = "http://localhost:3000/api"
      this.categories = (await axios.get(`${baseUrl}/categories`)).data
      this.promotions = (await axios.get(`${baseUrl}/promotions`)).data
      this.products = (await axios.get(`${baseUrl}/products`)).data
      this.groups = (await axios.get(`${baseUrl}/groups`)).data
    }
  }
})
