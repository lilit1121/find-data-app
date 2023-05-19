

<template>
<div class="data_card rounded-2xl card_border mb-6 relative">
  <div class="absolute top-3 right-3">
    <button class="bg-white rounded-2xl px-4 py-px mr-1.5 font-semibold text-sm">JSON</button>
    <button class="bg-white rounded-2xl px-4 py-px font-semibold  text-sm">CSV</button>
  </div>
  <img src="../assets/images/card_img.png" alt="" class="rounded-t-2xl w-full">
 <div class="p-4">
  <div class="text-lg">
    <h2 class="font-semibold">Beef & Lamb New Zealand: System and Policies</h2>
    <p class="text-sm pb-9 pt-1">Often knowledge is found only in the heads of people who perform jobs. Writing things down is a way to make sure that...</p>
  </div>
  <div class="flex items-center">
    <img src="../assets/images/BeefLamb_logo.png" alt="" class="pr-2.5">
    <h2 class="font-semibold text-sm">Beef & Lamb NZ</h2>
  </div>

 </div>


</div>
</template>

<style scoped>
.card_border {
  border: 1px solid #E5E7EB;
  background: #FFFFFF;
}
.data_card h2{
  color: #1F2937;
}
.data_card p{
  color: #6B7280;
}
.data_card button {
  color: #6B7280;
}
</style>

<script>
export default {
  name: 'datacard',
};
</script>
