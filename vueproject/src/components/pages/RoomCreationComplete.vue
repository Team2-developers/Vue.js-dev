<template>
  <div class="background-wrapper wrapper">
    <div id="app">
      <div v-html="qr_code"></div>
    </div>
    <!-- 参加ユーザーが表示される領域 -->
    <div v-for="(user, index) in users" :key="index">
      <img :src="user.img_path" />
      <div>
        <p>{{ user.user_mail }}</p>
        <p>{{ user.user_name }}</p>
      </div>
    </div>
    <!-- 情報取得の処理 -->
    <input type="button" @click="fetchUser" />
    <FooterNav />
  </div>
</template>

<script>
import axios from "axios";
import FooterNav from "../modules/FooterNav.vue";

export default {
  name: "RoomCreationComplete",
  props: {},
  data() {
    return {
      qr_code: "",
      game_id: "",
      users: [],
    };
  },
  methods: {
    async fetchUser() {
      let token = localStorage.getItem("auth_token");
      let game_id = localStorage.getItem("game_id");
      try {
        const response = await axios.get(
          `http://localhost:8000/api/game/${game_id}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        this.users = Object.values(response.data).filter((val) => val.user_id); // Keep only the values that contain user_id
      } catch (error) {
        console.error(error);
      }
    },
  },
  components: { FooterNav },
  mounted() {
    if (localStorage.qr_code) {
      this.qr_code = localStorage.getItem("qr_code");
    }
  },
};
</script>

<!-- 部屋作成完了画面 -->
<style scoped></style>
