<template>
  <div class="bg-cotton-candy rounded-r-lg py-30 pr-6 pl-10">
    <div class="flex justify-between mb-6">
      <h6
        class="text-thunderstorm font-bold text-base leading-6 font-noto-sans"
      >
        Filters
      </h6>
      <button class="flex items-center">
        <span class="text-grayish-blue font-bold text-base leading-5"
          >Clear all</span
        >
        <img class="ml-3" src="@/assets/icons/close.svg" alt="close icon" />
      </button>
    </div>
    <div class="bg-gainsboro rounded-full mb-5">
      <div class="p-1 flex items-center cursor-pointer">
        <div
          @click="changeTab('Website content')"
          class="font-noto-sans font-normal text-base leading-6 text-slate-gray p-1 rounded-full text-center w-1/2 tab"
          :class="{ active: activeTab === 'Website content' }"
        >
          Website content
        </div>
        <div
          @click="changeTab('Databases')"
          class="font-noto-sans font-normal text-base leading-6 text-slate-gray p-1 rounded-full text-center w-1/2 tab"
          :class="{ active: activeTab === 'Databases' }"
        >
          Databases
        </div>
      </div>
    </div>
    <button
      class="mb-5 show-result-btn font-noto-sans font-normal font-bold text-base leading-5 w-full bg-gainsboro rounded-3xl p-2 text-grayish-blue"
    >
      Show results
    </button>
    <div>
      <Disclosure v-for="(item, index) in filterParams" :key="index">
        <DisclosureButton class="w-full flex justify-between items-center py-5 border-t border-gainsboro">
          <p class="text-slate-gray font-noto-sans font-bold text-base leading-6">{{ item.name }}</p>
          <img src="@/assets/icons/blue-arrow-left.svg" alt="arrow icon" />
        </DisclosureButton>
        <DisclosurePanel>
          <div>
            <input type="checkbox" />
            <span>{{ item.subItems.name }}</span>
          </div>
          <span>{{ item.subItems.quantity }}</span>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script>
import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";
import { ref } from "vue";

export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel
  },
  setup() {
    let activeTab = ref("Website content");
    const filterParams = ref([
      {
        name: "organisations",
        subItems: [
          {
            name: "Dairy NZ",
            quantity: 24,
          },
          {
            name: "Stats NZ, Ministry for the Environment",
            quantity: 24,
          },
          {
            name: "Department of Conservation",
            quantity: 24,
          },
          {
            name: "Manaaki Whenua Landcare Research",
            quantity: 24,
          },
          {
            name: "Statz NZ, Fertilizer Association of New Zealand",
            quantity: 24,
          },
        ],
      },
      {
        name: "organisations",
        subItems: [
          {
            name: "Dairy NZ",
            quantity: 24,
          },
          {
            name: "Stats NZ, Ministry for the Environment",
            quantity: 24,
          },
          {
            name: "Department of Conservation",
            quantity: 24,
          },
          {
            name: "Manaaki Whenua Landcare Research",
            quantity: 24,
          },
          {
            name: "Statz NZ, Fertilizer Association of New Zealand",
            quantity: 24,
          },
        ],
      },
    ]);
    const changeTab = (val) => {
      activeTab.value = val;
    };
    return {
      changeTab,
      activeTab,
      filterParams,
    };
  },
};
</script>

<style>
.tab.active {
  background-color: white;
  color: #1f2937;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
}

.show-result-btn.active {
  background: #c3e120;
  color: #1f2937;
}
</style>