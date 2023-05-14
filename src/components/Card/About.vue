<template>
  <div>
    <h1 style="color:red">About</h1>
  </div>

  <Disclosure>
    <DisclosureButton class="py-2">
      Click me
    </DisclosureButton>
    <DisclosurePanel class="text-gray-500">
      Yes! You can purchase a license that you can share with your entire team.
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

</script>

