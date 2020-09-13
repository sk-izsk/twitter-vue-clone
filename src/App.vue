<template>
  <div id="app" class="flex container h-screen w-full">
    <sidebar />
    <tweet />
    <trending />
  </div>
</template>

<script>
import { Sidebar, Tweet, Trending } from './screens/';

export default {
  name: 'App',
  components: {
    Sidebar,
    Tweet,
    Trending,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
