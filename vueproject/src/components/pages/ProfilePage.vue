<template>
  <div class="background-wrapper wrapper profile-wrapper">
    <UserInfoBox />
    <div class="profile-update">
      <RouterLink :to="'../ProfileUpdate'" style="text-align: center"
        >View Profile</RouterLink
      >
    </div>
    <ProfileCard style="margin: 2rem" />
    <div>
      <div class="createGame-title">
        <img src="../../assets/image/pocket.svg" alt="" />
        <p>作成したゲーム</p>
      </div>
      <SomeoneLifeList />
    </div>
    <div class="create-life" v-on:click="createLife">
      <img
        class="create-life-img"
        src="../../assets/image/create-life.svg"
        alt=""
      />
      <div class="create-life-right">
        <div class="create-life-right-top">
          <img src="../../assets/image/life-icon.svg" alt="" />
          <p>人生の追加</p>
        </div>
        <p class="create-life-right-bottom">あなたの人生の紹介文が入ります</p>
      </div>
    </div>
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
<style scoped>
.profile-wrapper {
  padding: 0 20px;
}
.page-title {
  font-size: 24px;
}
.profile-update {
  font-size: 16px;
  background: #e7e7ff;
  padding: 8px 16px;
  border-radius: 16px;
  margin: 0 auto;
}
.profile-update a {
  color: #6b4eff;
}
.createGame-title {
  display: flex;
}
.createGame-title img {
  height: 30px;
  width: auto;
}
.createGame-title p {
  line-height: 30px;
  font-weight: bold;
  margin-left: 20px;
}

.create-life {
  background: #d9d9d9;
  display: flex;
  padding: 20px 30px;
}
.create-life-right {
  margin-left: 20px;
}
.create-life-right-top {
  display: flex;
  height: 30px;
  line-height: 30px;
  margin-bottom: 20px;
}
</style>
