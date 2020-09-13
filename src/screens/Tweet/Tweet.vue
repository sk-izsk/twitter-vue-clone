<template>
  <div class="w-full md:w-1/2 h-full overflow-y-scroll">
    <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
      <h1 class="text-xl font-bold">Home</h1>
      <i class="far fa-star text-xl text-blue"></i>
    </div>
    <div class="px-5 py-3 border-b-8 border-lighter flex">
      <div class="flex-none">
        <img
          src="https://lh3.googleusercontent.com/pw/ACtC-3epfH7nv1M0gjlxBPvjEuzVhub4UxRHhjAQXJoj32Q9-N6q6b0m8GX49RkVZCaDcXk4CjofoCgH-AabzYJ_cs8oSET1qfdHKtj98MKtx1v4dpndoBmvskb6Mlb6-fravD4EDkvQggGuFv8-_ccNRtcgFA=w912-h861-no"
          class="flex-none w-12 h-12 rounded-full border border-lighter"
        />
      </div>
      <form v-on:submit.prevent="addNewTweet" class="w-full px-4 relative">
        <textarea v-model="tweet.content" placeholder="What's up?" class="mt-3 pb-3 w-full focus:outline-none" />
        <div class="flex items-center">
          <i v-for="formIcon in formIcons" :key="formIcon" :class="`text-lg text-blue mr-4 ${formIcon}`" />
        </div>
        <button
          type="submit"
          class="h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0"
        >
          Tweet
        </button>
      </form>
    </div>
    <tweets :tweets="tweets" />
    <following :following="following" />
  </div>
</template>

<script>
import { Tweets, Following } from '../../components/';
export default {
  name: 'Tweet',
  components: {
    Tweets,
    Following,
  },
  methods: {
    addNewTweet() {
      let newTweet = {
        content: this.tweet.content,
      };
      this.tweets.push(newTweet);
    },
  },
  data() {
    return {
      tweet: { content: '' },
      formIcons: ['far fa-image', 'fas fa-film', 'far fa-chart-bar', 'far fa-smile'],
      tweets: [{ content: 'It is so nice outside!' }],
      following: [
        {
          src:
            'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU1MzM0OTc5MDg3/tim-cook-20967297-1-402.jpg',
          name: 'Tim Cook',
          handle: '@t_cook',
          time: '20 mins',
          tweet: "that's really cheap @steve_jobs",
          comments: '2,030',
          retweets: '50',
          like: '20,003',
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU9he5nec-OPpFnFGQn3E7nc1FsIyRbe-GrA&usqp=CAU',
          name: 'Bill Gates',
          handle: '@windows_guy',
          time: '40 mins',
          tweet: 'Haha seriously? 😅',
          comments: '100,000',
          retweets: '1,000,002',
          like: '5,000,003',
        },
        {
          src: 'https://image.cnbcfm.com/api/v1/image/105773439-1551717349171rtx6p9uc.jpg?v=1551717410',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '55 mins',
          tweet: 'iNeed it on mars vacation.. BTW do I need to quarantine there? 🙄',
          comments: '100,500',
          retweets: '1,000,032',
          like: '5,000,103',
        },
        {
          src: 'https://financialpostcom.files.wordpress.com/2013/11/stevejobs.jpg?quality=100&strip=all&w=380',
          name: 'Steve Jobs',
          handle: '@steve_jobs',
          time: '1.4 hr',
          tweet: 'Hey guys we have iVaccine now for covid-19, just $999 + $100(for iSyringe)??',
          comments: '1,000',
          retweets: '550',
          like: '1,000,003',
        },
      ],
    };
  },
};
</script>
