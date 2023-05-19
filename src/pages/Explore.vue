<template>
  <div class="flex mt-7 pl-10 pr-7">
    <div class="w-1/5"></div>
    <div class="w-4/5 mb-30 pl-7">
      <div class="flex justify-between pr-6 pl-3 mb-6">
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
          <ul class="flex flex-wrap">
            <li class="px-3" v-for="item in paginatedItems" :key="item.id">
              <router-link :to="'/explore/' + item.id"><DataCard /></router-link>
            </li>
          </ul>
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
  <!-- <div class="px-6.9-percent">
    <TabGroup v-model:activeTab="activeTab">
      <div>
        <div class="mb-8 shadow-sm pb-1.5">
          <nav>
            <Tab class="tab outline-0 ml-1 mr-8" v-for="tab in tabs" :key="tab.id">
              <span class="relative pt-2 pb-2.5 text-slate-gray font-noto-sans font-normal text-base leading-7">{{ tab.title }}</span>
            </Tab>
          </nav>
        </div>
        <div>
          <TabPanel v-for="tab in tabs" :key="tab.id">
            <div>
              <component :is="tab.component" />
            </div>
          </TabPanel>
        </div>
      </div>
    </TabGroup>
  </div> -->
</template>

<script>
import DataCard from "../components/DataCard.vue";
import {ref, computed} from "vue"
// import { TabGroup, Tab, TabPanel } from "@headlessui/vue";
// import { defineAsyncComponent } from "vue";
export default {
  components: {
    DataCard,
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
      ])

    const currentPage = ref(1)  
    const itemsPerPage = ref(13)

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
      console.log(currentPage, totalPages)
      if (currentPage.value < totalPages) {
        currentPage.value++;
      }
      console.log(currentPage, totalPages)
    };

    const gotoPage = (page) => {
      if (page >= 1 && page <= totalPages) {
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
      paginatedItems
    }
  },
  // components: {
  //   TabGroup,
  //   Tab,
  //   TabPanel,
  // },
  // setup() {
  //   const activeTab = ref(null);
  //   const tabs = [
  //     {
  //       id: "tab1",
  //       title: "About",
  //       component: defineAsyncComponent(() =>
  //         import("../components/Card/About.vue")
  //       ),
  //     },
  //     {
  //       id: "tab2",
  //       title: "Data table",
  //       component: defineAsyncComponent(() =>
  //         import("../components/Card/Table.vue")
  //       ),
  //     },
  //     {
  //       id: "tab3",
  //       title: "History",
  //       component: defineAsyncComponent(() =>
  //         import("../components/Card/History.vue")
  //       ),
  //     },
  //     {
  //       id: "tab4",
  //       title: "Comments",
  //       component: defineAsyncComponent(() =>
  //         import("../components/Card/Comments.vue")
  //       ),
  //     },
  //   ];
  //   return {
  //     activeTab,
  //     tabs,
  //   };
  // },
};
</script>
<style>
.tab[aria-selected="true"] > span {
  color: #374151;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;
}

.tab[aria-selected="true"] > span::after {
  content: "";
  border-radius: 2px 2px 0px 0px;
  width: 100%;
  height: 2px;
  background-color: #3d409a;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>