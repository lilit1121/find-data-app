<template>
  <div class="px-6.9-percent">
    <TabGroup v-model:activeTab="activeTab">
      <div>
        <div class="mb-8 shadow-sm pb-1.5">
          <nav>
            <Tab
              class="tab outline-0 ml-1 mr-8"
              v-for="tab in tabs"
              :key="tab.id"
            >
              <span
                class="relative pt-2 pb-2.5 text-slate-gray font-noto-sans font-normal text-base leading-7"
                >{{ tab.title }}</span
              >
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
  </div>
</template>

<script>
import { TabGroup, Tab, TabPanel } from "@headlessui/vue";
import { defineAsyncComponent } from "vue";
import {ref} from 'vue'
export default {
  components: {
    TabGroup,
    Tab,
    TabPanel,
  },
  setup() {
    const activeTab = ref(null);
    const tabs = [
      {
        id: "tab1",
        title: "About",
        component: defineAsyncComponent(() =>
          import("@/components/Card/About.vue")
        ),
      },
      {
        id: "tab2",
        title: "Data table",
        component: defineAsyncComponent(() =>
          import("@/components/Card/Table.vue")
        ),
      },
      {
        id: "tab3",
        title: "History",
        component: defineAsyncComponent(() =>
          import("@/components/Card/History.vue")
        ),
      },
      {
        id: "tab4",
        title: "Comments",
        component: defineAsyncComponent(() =>
          import("@/components/Card/Comments.vue")
        ),
      },
    ];
    return {
      activeTab,
      tabs,
    };
  },
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