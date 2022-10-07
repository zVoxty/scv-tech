<template>
  <div class="flex w-full mt-10">
    <div class="mt-40">
      <div class="flex flex-col mr-10 max-w-[35rem] space-y-4">
        <span class="text-xl">WELCOME TO MY WORLD</span>
        <span class="text-4xl"
        >Hi, I'm <span class="text-red-500">Vasile Sebastian Costinel</span>
        </span>
        <div
          class="text-4xl">
          a
          <vue-typer
            :text='[
              "Professional Coder.",
              "Senior VueJs developer."
            ]'
            :type-delay='35'
            :erase-delay='30'
            erase-style='backspace'
            ></vue-typer>
        </div>
        <span class="text-lg mt-10"
        >Quick learner and flexible person with over 5+ years experience.
        </span>
        <span class="text-lg mt-2">
          I have strong problem-solving and analytical skills. My primary focus
          is on web application and mobile app development</span
        >
      </div>
      <div class="flex flex-row space-x-16 mt-20">
        <div class="flex flex-col">
          <div>Find me on</div>
          <IconContainer class="mt-4">
            <IconLinkedIn/>
          </IconContainer>
        </div>
      </div>
    </div>
    <div class="flex ml-10 flex-1 ml-10 justify-center items-center">
      <v-img
        width="800"
        height="800"
        :src="require('assets/me-large.png')"
        class="rounded-md shadow-md"
      ></v-img>
    </div>
  </div>
</template>

<script>
import IconLinkedIn from "../components/icons/IconLinkedIn.vue";
import IconContainer from "../components/UI/IconContainer.vue";

export default {
  components: {IconLinkedIn, IconContainer},
};
</script>

<style>
.custom.char {
  @apply text-white;
}

.custom.caret {
  background-color: white;
}
</style>
