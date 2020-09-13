<template>
  <div class="flex flex-col-reverse">
    <div v-for="tweet in tweets" :key="tweet.content" class="w-full p-4 border-b hover:bg-lighter flex">
      <div class="flex-none mr-4">
        <img
          src="https://lh3.googleusercontent.com/pw/ACtC-3epfH7nv1M0gjlxBPvjEuzVhub4UxRHhjAQXJoj32Q9-N6q6b0m8GX49RkVZCaDcXk4CjofoCgH-AabzYJ_cs8oSET1qfdHKtj98MKtx1v4dpndoBmvskb6Mlb6-fravD4EDkvQggGuFv8-_ccNRtcgFA=w912-h861-no"
          class="h-12 w-12 rounded-full flex-none"
        />
      </div>
      <div class="w-full">
        <div class="flex items-center w-full">
          <p class="font-semibold">Sk iZsk</p>
          <p class="text-sm text-dark ml-2">@sk_izsk</p>
          <p class="text-sm text-dark ml-2">1 sec</p>
          <i class="fas fa-angle-down text-dark ml-auto"></i>
        </div>
        <p class="py-2">
          {{ tweet.content }}
        </p>
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center text-sm text-dark">
            <i class="far fa-comment mr-3"></i>
            <p>0</p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <i class="fas fa-retweet mr-3"></i>
            <p>0</p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <i class="fas fa-heart mr-3"></i>
            <p>1</p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <i class="fas fa-share-square mr-3"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tweets',
  props: {
    tweets: Array,
  },
};
</script>
