<template>
  <div class="lg:w-full relative">
    <button
      @click="dropdown = true"
      class="flex items-center w-full hover:bg-lightblue rounded-full p-2 focus:outline-none"
    >
      <img
        src="https://lh3.googleusercontent.com/pw/ACtC-3epfH7nv1M0gjlxBPvjEuzVhub4UxRHhjAQXJoj32Q9-N6q6b0m8GX49RkVZCaDcXk4CjofoCgH-AabzYJ_cs8oSET1qfdHKtj98MKtx1v4dpndoBmvskb6Mlb6-fravD4EDkvQggGuFv8-_ccNRtcgFA=w912-h861-no"
        class="w-10 h-10 rounded-full border border-lighter"
      />
      <div class="hidden lg:block ml-4">
        <p class="text-sm font-bold leading-tight">Sk iZsk</p>
        <p class="text-sm leading-tight">@sk_izsk</p>
      </div>
      <i class="hidden lg:block fas fa-angle-down ml-auto text-lg"></i>
    </button>
    <div
      v-if="dropdown === true"
      class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16"
    >
      <button @click="dropdown = false" class="p-3 flex items-center w-full hover:bg-lightest p-2 focus:outline-none">
        <img
          src="https://lh3.googleusercontent.com/pw/ACtC-3epfH7nv1M0gjlxBPvjEuzVhub4UxRHhjAQXJoj32Q9-N6q6b0m8GX49RkVZCaDcXk4CjofoCgH-AabzYJ_cs8oSET1qfdHKtj98MKtx1v4dpndoBmvskb6Mlb6-fravD4EDkvQggGuFv8-_ccNRtcgFA=w912-h861-no"
          class="w-10 h-10 rounded-full border border-lighter"
        />
        <div class="ml-4">
          <p class="text-sm font-bold leading-tight">Sk iZsk</p>
          <p class="text-sm leading-tight">@sk_izsk</p>
        </div>
        <i class="fas fa-check ml-auto test-blue"></i>
      </button>
      <button
        @click="dropdown = false"
        class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none"
      >
        Add an existing account
      </button>
      <button
        @click="dropdown = false"
        class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none"
      >
        Log out @sk_izsk
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SidebarDropdown',
  data() {
    return {
      dropdown: false,
    };
  },
};
</script>
