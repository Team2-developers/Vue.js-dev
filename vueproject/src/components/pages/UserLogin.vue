<template>
  <div class="background-wrapper wrapper">
    <form @submit.prevent="submitLogin">
      <div class="userーarea">
        <div class="centered-container">
          <input
            class="user_name rounded bg-light text-dark py-1 mb-2 rounded"
            type="text"
            placeholder="ユーザー名"
            style="width: 300px"
            v-model="user_mail"
          />
          <div class="spacer"></div>
          <input
            class="user_password rounded bg-light text-dark py-1 mb-2 rounded"
            type="password"
            placeholder="パスワード"
            style="width: 300px"
            v-model="password"
          />
          <div class="spacer"></div>
          <input
            class="login rounded-pill bg-dark text-light py-1"
            type="submit"
            value="ログイン"
            style="width: 150px"
          />
          <div class="spacer"></div>
        </div>
      </div>
    </form>
    <FooterNav />
  </div>
</template>

<script>
import axios from "axios";
import FooterNav from "../modules/FooterNav.vue";

export default {
  name: "LoginPage",
  data() {
    return {
      user_mail: "",
      password: "",
      img_pass: "user_noImage.svg",
      user_name: "ochinpo",
    };
  },
  props: {},
  components: {
    FooterNav,
  },
  methods: {
    async submitLogin() {
      try {
        const response = await axios.post("http://localhost:8000/api/login", {
          user_mail: this.user_mail,
          password: this.password,
        });
        if (response.status === 200) {
          alert("ログイン成功");
          localStorage.setItem('user_id', response.data.user.user_id	);
          localStorage.setItem('auth_token', response.data.token);
          this.$router.push('/ProfilePage');
          // You can also set user data or tokens here, based on the response
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    if (localStorage.user_mail) {
      this.user_mail = localStorage.getItem("user_mail");
    }
  },
  watch: {
    user_mail(newMail) {
      localStorage.user_mail = newMail;
    }
  },
};
</script>

<!-- ログイン画面 -->
<style scoped>
.centered-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.spacer {
  height: 10px;
}
</style>
