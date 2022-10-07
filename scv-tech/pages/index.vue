<template>
  <v-app ref="card" class="overflow-y-auto mx-auto fixed-height" v-scroll.self="onScroll">
    <v-app-bar
      app lights-out
      class="mx-6 rounded"
      :class="{'opacity-80 header-shadow' : this.currentSection >= 1}"
    >
      <TheHeader ref="header" :navigation="navigation" @onNavClick="onNavClick" />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <div class="space-y-20">
          <EntryPage id="home" ref="home"/>
          <Features id="features" ref="features"/>
        </div>
<!--        <EntryPage id="aboutMe" ref="aboutMe"/>-->
<!--        <EntryPage id="services" ref="services"/>-->
<!--        <EntryPage id="portfolio" ref="portfolio"/>-->
<!--        <EntryPage id="blog" ref="blog"/>-->
<!--        <EntryPage id="contact" ref="contact"/>-->
      </v-container>
    </v-main>

    <v-btn
      ref="scrollUp"
      class="scrollUp"
      :class="{'showScrollUp' : this.currentSection >= 1}"
      elevation="12"
      @click="onScrollUp"
    ><ArrowUpIcon/></v-btn>
    <v-footer class="flex flex-col space-y-4 items-center justify-center py-10">
      <v-img
        width="55"
        height="55"
        :src="require('~/assets/me.png')"
        class="rounded-full border-2"
      ></v-img>
      <div>Vasile Sebastian Costinel</div>
      <div>© 2022. All rights reserved.</div>
    </v-footer>
  </v-app>
</template>

<script>

import TheHeader from "~/components/layout/TheHeader";
import EntryPage from "~/sections/EntryPage";
import ArrowUpIcon from 'vue-material-design-icons/ArrowUp.vue';
import Features from "@/sections/Features";

export default {
  components: {Features, TheHeader, EntryPage, ArrowUpIcon},
  data() {
    return {
      currentSection: 0,
      navigationOffsetTops: [],
      navigation: [
        {id: 0, ref: 'home', label: 'Home'},
        {id: 1, ref: 'features', label: 'Features'},
        {id: 2, ref: 'services', label: 'Services'},
        {id: 3, ref: 'portfolio', label: 'Portfolio'},
        {id: 4, ref: 'blog', label: 'Blog'},
        {id: 5, ref: 'contact', label: 'Contact'},
      ],
    };
  },
  mounted() {
    let tempOffset = 0
    this.navigation.forEach((nav) => {
      const elOffset = document.getElementById(nav.ref)
      if (elOffset === null) {
        return
      }
      const range = {start: tempOffset - 200, end: elOffset.offsetHeight + tempOffset - 200}
      tempOffset = elOffset.offsetHeight + tempOffset
      this.navigationOffsetTops.push(range)
    })
    console.log(this.navigationOffsetTops)
  },
  methods: {
    onScrollUp() {
      this.$vuetify.goTo(this.$refs[this.navigation[0].ref], {container: this.$refs.card})
    },
    onNavClick(e) {
      if (!this.$refs[e.ref]) {
        return
      }
      this.$vuetify.goTo(this.$refs[e.ref], {container: this.$refs.card})
    },
    onScroll(e) {
      for (let i = 0; i < this.navigationOffsetTops.length; i++){
        const pair = this.navigationOffsetTops[i];
        if (e.target.scrollTop >= pair.start && e.target.scrollTop < pair.end) {
          this.currentSection = i;
          this.$refs.header.setCurrentSelected(this.currentSection)
          break
        }
      }
    }
  }
};
</script>

<style>
html {
  overflow: hidden;
}

::-webkit-scrollbar {
  width: .60rem;
  background-color: #E2E0E6;
  border-radius: .5rem;
}

::-webkit-scrollbar-thumb {
  background-color: #C7C7D2;
  border-radius: .5rem;
}

.fixed-height {
  max-height: calc(100vh);
}

.scrollUp {
  border-radius: 100px;
  position: fixed;
  right: 4rem;
  bottom: -20%;
  opacity: .8;
  z-index: 100;
  transition: .4s;
  width: 40px;
  height: 40px;
}

.showScrollUp {
  bottom: 4rem;
}

.container {
  @apply pl-40
}

.header-shadow {
  -webkit-box-shadow: 0px 6px 11px 0px #000000; 
  box-shadow: 0px 6px 11px 0px #000000;
}
</style>
