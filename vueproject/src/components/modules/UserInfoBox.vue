<template>
  <div class="userInfo">
    <img :src="getImagePath" alt="ユーザー画像" class="userInfoImage" />
    <div>
      <p>{{ this.user_name }}</p>
      <p>{{ this.user_mail }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserInfoBox",
  data() {
    return {
      user_name: "",
      user_mail: "",
    };
  },
  computed: {
    getImagePath() {
      return require("@/assets/image/user_noImage.svg");
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
        this.user_name = response.data.user_name;
        this.user_mail = response.data.user_mail;
        console.log(this.user_name);
        console.log(this.user_mail);
        // ユーザー情報を保存
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>
