<template>
  <NavigationItemBase>
    {{ name }}
  </NavigationItemBase>
</template>

<script>
import NavigationItemBase from "../UI/NavigationItemBase.vue";
export default {
  props: ["name"],
  components: { NavigationItemBase },
};
</script>
