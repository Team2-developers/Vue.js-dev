<template>
  <div class="background-wrapper wrapper">
    <UserInfoBox />
    <RouterLink :to="'../ProfileUpdate'" style="text-align: center"
      >ViewProfile</RouterLink
    >
    <ProfileCard />
    <button v-on:click="createLife">人生の作成</button>
    <SomeoneLifeList />
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
    return {};
  },
  props: {},
  components: {
    SomeoneLifeList,
    ProfileCard,
    UserInfoBox,
    FooterNav,
  },
  methods: {
    createLife() {
      this.$router.push("/GameModification");
    },
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
