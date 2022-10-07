<template>
  <div class="flex flex-col space-y-10">
    <span class="text-xl">FEATURES</span>
    <span class="text-5xl text-red-500">What I Do</span>
    <v-container>
      <v-row no-gutters>
        <v-col v-for="feature in features">
          <CardContainer>
            <template #icon>{{ feature.icon }}</template>
            <template #title>{{ feature.title }}</template>
            <template #description>{{ feature.description }}</template>
          </CardContainer>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardContainer from '@/components/UI/CardContainer'

export default {
  name: 'Features',
  components: {CardContainer},
  data() {
    return {
      features: [
        {
          icon: 'icon',
          title: 'Web Developement',
          description: 'I want write code'
        },
        {
          icon: 'icon',
          title: 'Web Developement',
          description: 'I want write code'
        },
        {
          icon: 'icon',
          title: 'Web Developement',
          description: 'I want write code'
        },
        {
          icon: 'icon',
          title: 'Web Developement',
          description: 'I want write code'
        }
      ]
    }
  }
}
</script>


<style scoped>
.container {
  padding: 0px;
}
</style>
