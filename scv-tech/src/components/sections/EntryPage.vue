<template>
  <div class="flex w-full">
    <div>
      <div class="flex flex-col mr-10 max-w-[35rem]">
        <span class="text-xl">WELCOME TO MY WORLD</span>
        <span class="text-[40px]"
          >Hi, I'm <span class="text-[#FF014F]">Vasile Sebastian Costinel</span>
        </span>
        <VueWriter
          :array="['Software Developer.', 'Professional Programmer.']"
          class="text-[40px]"
        >a
        </VueWriter>
        <span class="text-lg mt-10"
          >Quick learner and flexible person with over 5+ years experience.
        </span>
        <span class="text-lg mt-2">
          I have strong problem-solving and analytical skills. My primary focus
          is on web application and mobile app development</span
        >
      </div>
      <div class="flex flex-row mt-20 text-2xl">
        <div class="flex flex-col">
          <div>Find me on</div>
          <IconContainer class="mt-4">
            <IconLinkedIn />
          </IconContainer>
        </div>
      </div>
    </div>
    <div class="flex ml-10 flex-1 ml-10 justify-center items-center">
      <img
        alt="Vue logo"
        class="rounded-md"
        src="../../assets/me-large.png"
        width="600"
        height="600"
      />
    </div>
  </div>
</template>

<script>
import IconLinkedIn from "../icons/IconLinkedIn.vue";
import IconContainer from "../UI/IconContainer.vue";
export default {
  components: { IconLinkedIn, IconContainer },
};
</script>

<style></style>
