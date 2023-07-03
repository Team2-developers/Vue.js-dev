<template>
  <div
    id="appFooterNav"
    class="card fixed-bottom text-center h-56 app-footer-nav"
  >
    <ul class="nav d-flex card-footer p-0 text-white">
      <li
        v-for="navicationItem in navicationItems"
        :key="navicationItem.id"
        class="nav-item flex-fill"
      >
        <router-link :to="'../' + navicationItem.url">
          <img :src="navicationItem.icon" alt="icon" />
          <div class="text-dark">
            {{ navicationItem.iconName }}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
  data() {
    return {
      navicationItems: [
        {
          id: 1,
          url: "/",
          icon: require("../../assets/image/home-icon.svg"),
          iconName: "Feed",
        },
        {
          id: 2,
          url: "gamesearch",
          icon: require("../../assets/image/search-icon.svg"),
          iconName: "Search",
        },
        {
          id: 3,
          url: "notificationPanel",
          icon: require("../../assets/image/bell-icon.svg"),
          iconName: "Notifications",
        },
        {
          id: 4,
          url: "profilePage",
          icon: require("../../assets/image/vector-icon.svg"),
          iconName: "Me",
        },
      ],
    };
  },
  props: {},
};
</script>

<style scoped>
@media screen and (min-width: 460px) {
  .app-footer-nav {
    display: none;
  }
}
</style>
