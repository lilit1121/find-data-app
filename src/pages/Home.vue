<!-- 
<template>
  <div class="flex flex-wrap justify-around">
    <DataCard v-for="(item, index) in 2" :key="index" />
  </div>
</template>

<script>
import DataCard from '../components/DataCard.vue'
export default {
  components: {
    DataCard
  },
};
</script>

<style scoped>

</style> -->

<template>
  <div>
    <ul class="flex justify-around">
      <li v-for="item in paginatedItems" :key="item.id"><DataCard /></li>
    </ul>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1"><img src="@/assets/icons/arrow-left.svg" /></button>
      <button class="bg-royal-blue" v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ active: currentPage === page }">{{ page }}</button>
      <button @click="nextPage" :disabled="currentPage === totalPages"><img src="@/assets/icons/arrow-right.svg" /></button>
    </div>
  </div>
</template>

<script>
import DataCard from '../components/DataCard.vue'
export default {
  components: {
    DataCard
  },
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 2, name: 'Item 2' },
        { id: 2, name: 'Item 2' },
        { id: 2, name: 'Item 2' },
        { id: 2, name: 'Item 2' },
        { id: 2, name: 'Item 2' },
        { id: 2, name: 'Item 2' },
        { id: 2, name: 'Item 2' },
        { id: 2, name: 'Item 2' },
        { id: 2, name: 'Item 2' },
        { id: 2, name: 'Item 2' },
        { id: 2, name: 'Item 2' },
        // ... more items
      ],
      currentPage: 1,
      itemsPerPage: 5 // Number of items to show per page
    };
  },
  computed: {
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.items.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    gotoPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }
  }
};
</script>
