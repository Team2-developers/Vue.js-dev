<template>
  <div class="userInfo">
    <img :src="img_path" alt="ユーザー画像" class="userInfoImage" />
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
      img_path: "",
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
        this.user_name = response.data.user.user_name;
        this.user_mail = response.data.user.user_mail;
        this.img_path = response.data.img_path;
        localStorage.setItem("user_img", this.img_path);
        // ユーザー情報を保存
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
