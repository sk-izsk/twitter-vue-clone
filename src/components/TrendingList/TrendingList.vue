<template>
  <div class="w-full rounded-lg bg-lightest">
    <div class="flex items-center justify-between p-3">
      <p class="text-lg font-bold">Trends for You</p>
      <i class="fas fa-cog text-lg text-blue"></i>
    </div>
    <button
      v-for="trend in trending"
      :key="trend.title"
      class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter disable_outline"
    >
      <div>
        <p class="text-xs text-left leading-tight text-dark">{{ trend.top }}</p>
        <p class="font-semibold text-sm text-left leading-tight">{{ trend.title }}</p>
        <p class="text-left text-sm leading-tight text-dark">{{ trend.bottom }}</p>
      </div>
      <i class="fas fa-angle-down text-lg text-dark"></i>
    </button>
    <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter disable_outline">
      Show More
    </button>
  </div>
</template>

<script>
export default {
  name: 'TrendingList',
  props: {
    trending: Array,
  },
};
</script>

<style scoped>
.disable_outline {
  outline: none;
}
.disable_outline:active {
  outline: none;
}
</style>
