<template>
  <Disclosure v-for="(item, index) in list" :key="index">
    <div class="mb-6 p-6 w-full bg-cotton-candy border border-gray-snowy-day rounded-lg">
      <DisclosureButton class="flex items-center justify-between w-full">
        <div>
          <h4 class="font-noto-sans font-bold text-base leading-6 text-thunderstorm mb-3 text-left">{{ item.title }}</h4>
          <p class="font-noto-sans font-normal text-base leading-7 text-thunderstorm text-left w-95-percent">{{ item.description }}</p>
        </div>
        <div class="w-30">
          <img class="transition-all duration-300 ease-linear w-full" src="@/assets/icons/arrow-top.svg" alt="icon" />
        </div>
      </DisclosureButton>
      <DisclosurePanel>
        <div class="mt-8" v-html="item.content"></div>
      </DisclosurePanel>
    </div>
  </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },
  setup(props) {},
});
</script>

<style scoped>
button[data-headlessui-state="open"] > div img {
  transform: rotate(-180deg);
}
</style>