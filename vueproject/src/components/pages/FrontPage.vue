<template>
  <div class="background-wrapper wrapper" id="qr">
    <div class="builderーarea">
      <div>
        <video ref="videoElement" autoplay></video>
        <button
          @click="startCamera"
          class="room_search rounded bg-light text-dark py-1 mb-2 rounded"
        >
          部屋を探す
        </button>
      </div>
      <iframe
        v-bind:class="{ hiddenQR }"
        width="100%"
        height="640px"
        scrolling="no"
        allow="camera; clipboard-read; clipboard-write"
        frameborder="no"
        src="https://contentsviewer.github.io/QR-UniversalScanner/"
      ></iframe>
      <input
        class="room_build rounded-pill bg-dark text-light py-1"
        type="button"
        value="部屋を作る"
        v-on:click="createGameQR"
      />
    </div>
    <div class="userーarea">
      <input
        class="login rounded-pill bg-light text-dark py-1 border border-dark mb-2"
        type="button"
        value="ログイン"
        v-on:click="login"
      />
      <input
        class="create_account rounded-pill bg-dark text-light py-1"
        type="button"
        value="アカウントを作る"
        v-on:click="UserRegistration"
      />
    </div>
    <UserInfoBox
      :img_pass="img_pass"
      :user_name="user_name"
      :user_mail="user_mail"
    />

    <FooterNav />
  </div>
</template>

<script>
import axios from "axios";
import UserInfoBox from "@/components/modules/UserInfoBox";
import FooterNav from "../modules/FooterNav.vue";

export default {
  name: "FrontPage",
  data() {
    return {
      img_pass: "user_noImage.svg",
      user_name: "ochinpo",
      user_mail: "test@gmail.com",
      hiddenQR: true,
    };
  },
  props: {},
  methods: {
    login() {
      this.$router.push("UserLogin");
    },
    UserRegistration() {
      this.$router.push("UserRegistration");
    },
    async createGameQR() {
      let user_id = Number(localStorage.getItem("user_id"));
      let token = localStorage.getItem("auth_token");
      try {
        const response = await axios.post(
          "http://localhost:8000/api/games",
          { user_id },
          {
            headers: {
              Authorization: "Bearer " + token, // Laravelから取得したトークン
            },
          }
        );
        if (response.status === 200) {
          localStorage.setItem("qr_code", response.data);
          alert("ゲーム作成成功");
          this.$router.push("/RoomCreationComplete");

          // You can also set user data or tokens here, based on the response
        }
      } catch (error) {
        console.error(error);
      }
    },

    startCamera() {
      this.hiddenQR = !this.hiddenQR;
    },
  },
  components: {
    UserInfoBox,
    FooterNav,
  },
};
</script>

<!-- アプリホーム画面 -->
<style scoped>
.hiddenQR{
  display: none;
}
dl.search {
  width: 330px;
  margin: auto;
  position: relative;
  background-color: #fff;
}
dl.search dd {
  position: absolute;
  top: 0;
  right: 0;
}
dl.search dd button {
  display: block;
  padding: 8px;
}
dl.search dd button span {
  display: block;
  width: 20px;
  height: 20px;
  background: url("../../assets//image/serch_con.svg") no-repeat scroll 0 0;
}
</style>
