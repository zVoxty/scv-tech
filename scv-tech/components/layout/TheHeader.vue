<template>
  <div class="flex items-center">
    <AvatarIcon class="mr-4" />
    <NavigationItemBase>Vasile Sebastian Costinel</NavigationItemBase>
    <div class="flex items-center justify-center ml-auto">
      <NavigationItem
        v-for="navItem in navigation"
        :key="navItem"
        :name="navItem"
      />
    </div>
  </div>
</template>

<script>
import NavigationItem from "../navigation/NavigationItem.vue";
import AvatarIcon from "../AvatarIcon.vue";

export default {
  components: { NavigationItem, AvatarIcon },
  data() {
    return {
      navigation: [
        "Home",
        "About me",
        "Services",
        "Portfolio",
        "Blog",
        "Contact",
      ],
    };
  },
};
</script>
