<template>
  <div class="flex mt-7 pr-7">
    <div class="w-1/5">
      <Filter />
    </div>
    <div class="w-4/5 pl-7 my-30">
      <div class="flex justify-between pr-4 pl-3 mb-6">
        <h2
          class="text-thunderstorm font-montserrat font-semibold text-2xl leading-7"
        >
          Explore Data
        </h2>
        <div class="relative bg-white w-40.5-percent">
          <img
            class="cursor-pointer absolute left-3.5 transform -translate-y-2/4 inset-y-1/2"
            src="@/assets/icons/search.svg"
            alt="search icon"
          />
          <input
            class="w-full pl-10 py-2.5 pr-2.5 border border-gray-300 rounded-full"
            type="text"
            placeholder="Search data"
          />
        </div>
      </div>
      <div>
        <div>
          <div class="flex flex-wrap">
            <router-link
              class="card"
              v-for="item in paginatedItems"
              :key="item.id"
              :to="'/explore/' + item.id"
              ><DataCard
            /></router-link>
          </div>
          <div class="pl-3 flex justify-between items-center">
            <span
              class="text-slate-gray font-noto-sans font-normal text-sm leading-snug"
              >Showing {{ itemsPerPage }} of {{ items.length }} items</span
            >
            <div class="mr-30">
              <button
                class="mr-3.5"
                @click="prevPage"
                :disabled="currentPage === 1"
              >
                <img src="@/assets/icons/arrow-left.svg" />
              </button>
              <button
                class="w-10 h-10 rounded-full d-flex items-center justify-center"
                v-for="page in totalPages"
                :key="page"
                @click="gotoPage(page)"
                :class="currentPage === page ? 'active bg-royal-blue' : ''"
              >
                <span
                  class="font-noto-sans"
                  :class="
                    currentPage === page
                      ? 'text-white font-semibold text-base leading-6'
                      : 'text-slate-gray font-normal text-base leading-snug'
                  "
                  >{{ page }}</span
                >
              </button>
              <button
                class="ml-3.5"
                @click="nextPage"
                :disabled="currentPage === totalPages"
              >
                <img src="@/assets/icons/arrow-right.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataCard from "../../components/DataCard.vue";
import { ref, computed } from "vue";
import Filter from "../../components/Filter/index.vue";
export default {
  components: {
    DataCard,
    Filter,
  },
  setup() {
    const items = ref([
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
      { id: 13 },
      { id: 14 },
      { id: 15 },
      { id: 16 },
      { id: 17 },
      { id: 18 },
    ]);

    const currentPage = ref(1);
    const itemsPerPage = ref(13);

    const paginatedItems = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage.value;
      const endIndex = startIndex + itemsPerPage.value;
      return items.value.slice(startIndex, endIndex);
    });

    const totalPages = computed(() => {
      return Math.ceil(items.value.length / itemsPerPage.value);
    });

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      console.log(currentPage.value , totalPages.value)
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const gotoPage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    return {
      items,
      currentPage,
      itemsPerPage,
      prevPage,
      nextPage,
      gotoPage,
      totalPages,
      paginatedItems,
    };
  },
};
</script>

<style>
  .card{
    width: calc(100% / 3 - 24px);
    margin: 0 12px;
  }
</style>