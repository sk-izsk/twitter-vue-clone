<template>
  <div id="app" class="flex container h-screen w-full">
    <sidebar />
    <tweet />
  </div>
</template>

<script>
import { Sidebar, Tweet } from './screens/';

export default {
  name: 'App',
  components: {
    Sidebar,
    Tweet,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
