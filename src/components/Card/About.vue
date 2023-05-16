<template>
  <div>
    <disclosure :list="list" ></disclosure>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import disclosure from "@/components/Disclosure/index.vue";
import { ref } from "vue";

export default defineComponent({
  components: {
    disclosure,
  },
  setup() {
    const list = ref([
      {
        title: "Data collection methods",
        description: "Different methods used to collect data, including surveys and questionnaires, observational studies, controlled experiments, web scraping and APIs, and crowdsourcing. It explains the pros and cons of each method and provides examples of when each method might be used.",
        content: "test",
      },
    ]);

    return { list };
  },
});
</script>

