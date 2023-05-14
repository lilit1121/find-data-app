<template>
  <TabGroup v-model:activeTab="activeTab">
    <div class="flex">
      <div class="w-1/4">
        <nav class="space-y-1">
          <Tab v-for="tab in tabs" :key="tab.id">
            <button
                class="w-full flex items-center px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                :class="{ 'text-gray-900': tab.isActive }"
            >
              {{ tab.title }}
            </button>
          </Tab>
        </nav>
      </div>
      <div class="w-3/4">
        <TabPanel v-for="tab in tabs" :key="tab.id">
          <div>
            <component :is="tab.component" />

          </div>

        </TabPanel>
      </div>
    </div>
  </TabGroup>
</template>

<script>
import { ref } from 'vue';
import { TabGroup, Tab, TabPanel } from '@headlessui/vue';
import { defineAsyncComponent } from 'vue';
export default {
  components: {
    TabGroup,
    Tab,
    TabPanel,
  },
  setup() {
    const activeTab = ref(null);

    const tabs = [
      { id: 'tab1', title: 'About',component: defineAsyncComponent(() => import('../components/Card/About.vue')) },
      { id: 'tab2', title: 'Data table',component: defineAsyncComponent(() => import('../components/Card/Table.vue')) },
      { id: 'tab3', title: 'History',component: defineAsyncComponent(() => import('../components/Card/History.vue')) },
      { id: 'tab4', title: 'Comments',component: defineAsyncComponent(() => import('../components/Card/Comments.vue')) },
    ];

    return {
      activeTab,
      tabs,
    };
  },
};
</script>
