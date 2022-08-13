<template>
  <div>
    <TheHeader class="px-20 py-5 pt-8"/>

    <div class="flex flex-col px-[20rem] pr-0 mt-20">
      <EntryPage/>
    </div>
  </div>

</template>

<script>

import TheHeader from "~/components/layout/TheHeader";
import EntryPage from "~/components/sections/EntryPage";

export default {
  components: {TheHeader, EntryPage},
};
</script>
