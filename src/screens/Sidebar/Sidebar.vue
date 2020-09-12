<template>
  <div class="lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between">
    <div>
      <button class="h-12 w-12 hover:bg-lightblue text-3xl rounded-full text-blue">
        <i class="fab fa-twitter"></i>
      </button>
      <side-row :id="id" :tabs="tabs" />
      <button
        class="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue"
      >
        <p class="hidden lg:block">Tweet</p>
        <i class="fas fa-plus lg:hidden"></i>
      </button>
    </div>
    <sidebar-dropdown />
  </div>
</template>

<script>
import { SideRow, SidebarDropdown } from '../../components/';
export default {
  name: 'Sidebar',
  components: {
    SideRow,
    SidebarDropdown,
  },
  data() {
    return {
      tabs: [
        { icon: 'fas fa-home', title: 'Home', id: 'home' },
        { icon: 'fas fa-hashtag', title: 'Explore', id: 'explore' },
        { icon: 'far fa-bell', title: 'Notifications', id: 'notifications' },
        { icon: 'far fa-envelope', title: 'Messages', id: 'messages' },
        { icon: 'far fa-bookmark', title: 'Bookmarks', id: 'bookmarks' },
        { icon: 'fas fa-clipboard-list', title: 'Lists', id: 'lists' },
        { icon: 'far fa-user', title: 'Profile', id: 'profile' },
        { icon: 'fas fa-ellipsis-h', title: 'More', id: 'more' },
      ],
      id: 'home',
    };
  },
};
</script>
