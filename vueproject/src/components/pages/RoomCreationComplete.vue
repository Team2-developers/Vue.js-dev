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
    <input type="button" @click="fetchUser" value="ゲームを開始" />
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
          }
        }
        console.log(this.users);
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
.userWrapper{
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
{"game_id":1,"game_status":"notstarted","user_id":1,"user_2":4,"user_3":null,"user_4":null,
"user1":{"user_id":1,"img_id":1,"user_mail":"example@example.com","user_name":"mac","life_id":null,"birth":"2000-02-02","blood_type":"A","height":100,"hobby":"reading","episode1":"Episode1","episode2":"Episode
2","episode3":"Episode 3","episode4":"Episode 4","episode5":"Episode
5","abilities":null,"last_used_at":null,"img_path":"http:\/\/localhost:8000\/storage\/giftFlow.png"},
"user2":{"user_id":4,"img_id":1,"user_mail":"example@example2.com","user_name":"mac","life_id":null,"birth":"2000-02-02","blood_type":"A","height":100,"hobby":"reading","episode1":"Episode
1","episode2":"Episode 2","episode3":"Episode 3","episode4":"Episode
4","episode5":"Episode
5","abilities":null,"last_used_at":null,"img_path":"http:\/\/localhost:8000\/storage\/giftFlow.png"},"user3":null,"user4":null}
