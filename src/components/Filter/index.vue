<template>
  <div class="bg-cotton-candy rounded-r-lg py-30 pr-6 pl-10">
    <div class="flex justify-between">
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
    <div class="bg-gainsboro rounded-full">
      <div class="p-1 flex items-center cursor-pointer">
        <div @click="changeTab('Website content')" class="p-1 font-noto-sans font-normal font-semibold text-base leading-6 text-thunderstorm rounded-full text-center w-1/2 tab" :class="{'active': activeTab === 'Website content'}">Website content</div>
        <div @click="changeTab('Databases')" class="p-1 font-noto-sans font-normal font-semibold text-base leading-6 text-thunderstorm rounded-full text-center w-1/2 tab" :class="{'active': activeTab === 'Databases'}">Databases</div>
      </div>
    </div>
    <button>Show results</button>
    <div>
      <Disclosure>
        <DisclosureButton>
          <div>
            <input type="checkbox" />
            <span>Dairy NZ</span>
          </div>
          <span>24</span>
        </DisclosureButton>
        <DisclosurePanel></DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { ref } from 'vue'

export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  setup() {
    let activeTab = ref('Website content')
    const changeTab = (val) => {
        activeTab.value = val
        console.log(activeTab)
    }
    return {
        changeTab,
        activeTab
    }
  }
};
</script>

<style>
.tab.active{
    background-color: white;
    color: #6B7280;
}
</style>