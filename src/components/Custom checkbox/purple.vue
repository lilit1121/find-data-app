<template>
        <label @click="checked = !checked" :class="checked ? 'bg-violet' : 'bg-white'"  class="cursor-pointer w-5 h-5 rounded border border-gainsboro relative flex items-center justify-center" :for="id">
            <img class="cursor-pointer" src="@/assets/icons/checkbox.svg" alt="icon">
            <input :checked="checked" class="z-20 opacity-0 absolute cursor-pointer" type="checkbox" :id="id">
        </label>
</template>

<script>
    export default {
        props: {
            id: {
                required: true
            },
            checked: {
                required: true
            }
        }
    }
</script>
<style></style>