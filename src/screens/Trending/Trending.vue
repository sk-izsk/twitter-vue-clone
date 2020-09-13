<template>
  <div class="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
    <input class="pl-12 rounded-full w-full p-2 bg-lighter text-sm mb-4 disable_outline" placeholder="Search Twitter" />
    <i class="fas fa-search absolute left-0 top-0 mt-5 ml-12 text-sm text-light"></i>
    <trending-list :trending="trending" />
    <friends :friends="friends" />
  </div>
</template>

<script>
import { TrendingList, Friends } from '../../components/';
export default {
  name: 'Trending',
  components: {
    TrendingList,
    Friends,
  },
  data() {
    return {
      trending: [
        { top: 'Trending in QC', title: 'François Legault', bottom: 'Trending with: François Legault' },
        { top: 'Music', title: 'Pink', bottom: '135K Tweets' },
        { top: 'Pop', title: 'Blue Ivy', bottom: '40k tweets' },
        { top: 'Trending in Canada', title: 'Justin Trudeau', bottom: '40k tweets' },
        { top: 'Trending', title: 'When Beyonce', bottom: '25.4k tweets' },
      ],
      friends: [
        {
          src: 'https://image.cnbcfm.com/api/v1/image/105773439-1551717349171rtx6p9uc.jpg?v=1551717410',
          name: 'Elon Musk',
          handle: '@teslaBoy',
        },
        {
          src: 'https://financialpostcom.files.wordpress.com/2013/11/stevejobs.jpg?quality=100&strip=all&w=380',
          name: 'Steve Jobs',
          handle: '@steve_jobs',
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU9he5nec-OPpFnFGQn3E7nc1FsIyRbe-GrA&usqp=CAU',
          name: 'Bill Gates',
          handle: '@windows_guy',
        },
      ],
    };
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
