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
        // 参加ユーザーの確認処理
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
        if (response.data.user4 != undefined) {
          alert("楽しんでイコウェ");
          try {
            await this.realStartGame(); // await を使って呼び出す
          } catch (error) {
            console.error(error);
            alert("ゲームの開始に問題がありました。");
          }
        } else {
          alert("4人でしか遊べません...(ごめんなさい)");
        }
      } catch (error) {
        console.error(error);
      }
    },

    async realStartGame() {
      let token = localStorage.getItem("auth_token");
      let game_id = localStorage.getItem("game_id");
      try {
        const response = await axios.get(
          `http://localhost:8000/api/game/${game_id}/start`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.status === 200 || response.status === 201) {
          console.log(response.data);
          localStorage.setItem("game_id", response.data.life.life_id);
          localStorage.setItem("game_name", response.data.life.life_name);
          localStorage.setItem("last-message", response.data.life.message);
          alert("やったね頑張った翔大");
          this.$router.push("/GameDisplay");
        }
      } catch (error) {
        console.error(error.data);
        throw error; // エラーを上位に投げる
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
