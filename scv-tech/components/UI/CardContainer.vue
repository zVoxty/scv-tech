<template>
  <div class="flex flex-col w-72 h-72 shadow-card space-y-5 p-10 rounded-md">
    <div>
      <slot name="icon"></slot>
    </div>
    <div>
      <slot name="title"></slot>
    </div>
    <div>
      <slot name="description"></slot>
    </div>
  </div>
</template>

<style scoped>
.shadow-card {
  -webkit-box-shadow: 10px 10px 19px #000000, -10px -10px 19px rgba(93, 93, 93, 0.4);
  box-shadow: 10px 10px 19px #000000, -10px -10px 19px rgba(93, 93, 93, 0.4);
  transition: all;
  transition-duration: 1000ms;
}

.shadow-card:hover {
  -webkit-box-shadow: 10px 10px 19px rgba(93, 93, 93, 0.4), -10px -10px 19px #000000;
  box-shadow: 10px 10px 19px rgba(93, 93, 93, 0.4), -10px -10px 19px #000000;
}

.shadow-card-in {
  box-shadow: inset 21px 21px 19px rgba(0, 0, 0, 0.37), inset -21px -21px 19px #202225;
}
</style>
