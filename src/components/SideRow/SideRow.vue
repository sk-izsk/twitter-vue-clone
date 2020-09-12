<template>
  <div>
    <button
      v-for="tab in tabs"
      :key="tab.id"
      @click="id = tab.id"
      :class="`focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${
        id === tab.id ? 'text-blue' : ''
      }`"
    >
      <i :class="`${tab.icon} text-2xl mr-4 text-left`"></i>
      <p class="text-lg font-semibold text-left hidden lg:block">{{ tab.title }}</p>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SideRow',
  props: {
    tabs: Array,
    id: String,
  },
};
</script>
