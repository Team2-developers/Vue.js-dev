<template>
  <div class="background-wrapper wrapper">
    <UserInfoBox />
    <RouterLink :to="'../ProfileUpdate'" style="text-align: center"
      >ViewProfile</RouterLink
    >
    <ProfileCard />
    <SomeoneLifeList
      :img_pass="img_pass"
      :life_name="life_name"
      :life_event="life_event"
      :good="good"
    />
    <FooterNav />
  </div>
</template>

<script>
import axios from "axios";
import SomeoneLifeList from "@/components/modules/SomeoneLifeList";
import ProfileCard from "../modules/ProfileCard.vue";
import UserInfoBox from "../modules/UserInfoBox.vue";
import FooterNav from "../modules/FooterNav.vue";

export default {
  name: "ProfilePage",
  data() {
    return {
      img_pass: "user_noImage.svg",
      life_name: "ochinpo",
      life_event: "僕の中学生日記",
      good: 1000,
      user_mail: "test@gmail.com",
    };
  },
  props: {},
  components: {
    SomeoneLifeList,
    ProfileCard,
    UserInfoBox,
    FooterNav,
  },
  mounted() {
    let token = localStorage.getItem("auth_token");
    axios
      .get("http://localhost:8000/api/user", {
        headers: {
          Authorization: "Bearer " + token, // Laravelから取得したトークン
        },
      })
      .then((response) => {
        this.user = response.data;
        console.log(response.data);
        // ユーザー情報を保存
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<!-- プロフィール画面 -->
<style scoped></style>
