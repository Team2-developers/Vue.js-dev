<template>
  <div class="background-wrapper wrapper">
    <div class="buttonArea">
      <input
        class="roomJoin"
        type="button"
        value="参加する"
        @click="roomJoin"
      />
    </div>
    <FooterNav />
  </div>
</template>

<script>
import axios from "axios";
import FooterNav from "../modules/FooterNav.vue";

export default {
  name: "RoomJoin",
  props: {},
  data() {
    return {
      game_id: "",
    };
  },
  methods: {
    async roomJoin() {
      let token = localStorage.getItem("auth_token");
      let user_id = localStorage.getItem("user_id");
      let data = {
        game_id: this.game_id,
        user_id: user_id,
      };
      try {
        const response = await axios.post(
          `http://localhost:8000/api/game/join/${this.game_id}`,
          data,
          {
            headers: {
              Authorization: "Bearer " + token, // Laravelから取得したトークン
            },
          }
        );
        if (response.status === 200) {
          alert("参加成功");
          // this.$router.push("/ProfilePage");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  components: { FooterNav },
  created() {
    this.game_id = this.$route.query.game_id;
  },
};
</script>

<!-- 部屋の参加画面 -->
<style scoped>
.roomJoin {
  margin: 5px 0;
  border-radius: 20px;
  padding: 10px;
  width: 200px;
}
.roomJoin {
  background: black;
  color: white;
}
.buttonArea{
  padding: 60px 0;
}
</style>
