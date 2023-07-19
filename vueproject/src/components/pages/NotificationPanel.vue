<template>
  <div class="background-wrapper wrapper notification">
    <h2>通知</h2>
    <NotificationBanner
      v-for="notification in notifications"
      :key="notification.user_id"
      :img_pass="notification.img_path"
      :user_name="notification.user_name"
      :user_email="notification.user_email"
      :comment="notification.message"
    />
    <FooterNav />
  </div>
</template>

<script>
import axios from "axios";
import NotificationBanner from "@/components/modules/NotificationBanner";
import FooterNav from "../modules/FooterNav.vue";

export default {
  name: "NotificationPanel",
  data() {
    return {
      notifications: [],
    };
  },
  components: {
    NotificationBanner,
    FooterNav,
  },
  mounted() {
    let token = localStorage.getItem("auth_token");
    axios
      .get(`http://localhost:8000/api/notifications`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          this.notifications = response.data.notification;
          console.log(response.data)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<!-- 通知画面 -->
<style scoped>
.notification{
  padding: 0 20px;
}
</style>
