<template>
  <div class="w-full rounded-lg bg-lightest my-4">
    <div class="p-3">
      <p class="text-lg font-bold">Who to Follow</p>
    </div>
    <button
      v-for="friend in friends"
      :key="friend.name"
      class="w-full flex hover:bg-lighter p-3 border-t border-lighter disable_outline"
    >
      <img :src="`${friend.src}`" class="w-12 h-12 rounded-full border border-lighter" />
      <div class="hidden lg:block ml-4">
        <p class="text-sm font-bold leading-tight">{{ friend.name }}</p>
        <p class="text-sm leading-tight">{{ friend.handle }}</p>
      </div>
      <button class="ml-auto text-sm text-blue py-1 px-4 rounded-full border-2 border-blue disable_outline">
        Follow
      </button>
    </button>
    <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter disable_outline">
      Show More
    </button>
  </div>
</template>

<script>
export default {
  name: 'Friends',
  props: {
    friends: Array,
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
