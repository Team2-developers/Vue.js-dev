<template>
  <div class="background-wrapper wrapper">
    <div id="app">
      <div v-html="qr_code"></div>
    </div>
    <!-- 参加ユーザーが表示される領域 -->
    <div class="userWrapper" v-for="(user, index) in users" :key="index">
      <img class="userImage" :src="user.img_path" />
      <div>
        <p>{{ user.user_mail }}</p>
        <p>{{ user.user_name }}</p>
      </div>
    </div>
    <!-- 情報取得の処理 -->
    <div>
      <input type="button" @click="fetchUser" value="参加ユーザーを取得" />
    </div>
    <input type="button" @click="startGame" value="ゲームを開始" />
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
        for (let i = 1; i <= 4; i++) {
          const userKey = `user${i}`;
          if (response.data[userKey] !== null) {
            this.users.push(response.data[userKey]);
            localStorage.setItem(
              userKey,
              JSON.stringify(response.data[userKey])
            );
          }
        }
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async startGame() {
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
        if (response.data.user4 != undefined) {
          alert("楽しんでイコウェ");
          this.$router.push("/GameDisplay");
        } else {
          alert("4人でしか遊べません...(ごめんなさい)");
        }
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
<style scoped>
.userWrapper {
  display: flex;
  justify-content: space-around;
  background: white;
  padding: 2px;
  margin: 10px;
}
.userImage {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
}
</style>
