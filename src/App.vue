<template>
  <div id="app" class="flex container h-screen w-full">
    <Sidebar />
  </div>
</template>

<script>
import { Sidebar } from './screens/';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
