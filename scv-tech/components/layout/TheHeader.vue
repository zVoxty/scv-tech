<template>
  <div class="flex items-center space-x-8">
    <div>
      <v-img
        width="55"
        height="55"
        :src="require('~/assets/me.png')"
        class="rounded-full border-2"
      ></v-img>
    </div>
    <div>Vasile Sebastian Costinel</div>
    <v-tabs class="ml-auto" :value="currentSelected" @change="onChange">
      <v-tab v-for="navItem in navigation"
             :key="navItem.id"
             @click="onTabClick(navItem)"
      >{{ navItem.label }} </v-tab>
    </v-tabs>
  </div>
</template>

<script>
import NavigationItem from "../navigation/NavigationItem.vue";

export default {
  components: { NavigationItem },
  props: ['navigation', 'currentSection'],
  methods: {
    onChange(change) {
      this.currentSelected = change
    },
    setCurrentSelected(id) {
      this.currentSelected = id
    },
    onTabClick(tab) {
      this.$emit('onNavClick', tab)
      console.log(this.currentSelected)
    }
  },
  data() {
    return {
      currentSelected: this.currentSection
    }
  }
};
</script>

<style scoped>
.v-tabs {
  display: flex;
  flex-grow: 0;
  flex-basis: content;
  border-radius: 5px;
}
</style>
