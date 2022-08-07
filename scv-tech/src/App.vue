<template>
  <perfect-scrollbar>
    <TheHeader class="px-20 py-5 pt-8" />

    <div class="flex flex-col px-[20rem] pr-0 mt-20">
      <EntryPage />
    </div>
  </perfect-scrollbar>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import EntryPage from "./components/sections/EntryPage.vue";
export default {
  components: { TheHeader, EntryPage },
};
</script>

<style scoped>
/* example */
.ps {
  height: 100vh;
}
</style>
