<template>
  <!-- replace -->
  <div class="profile_card shadow-sm mb-5 bg-body rounded">
    <h2 class="title">PROFILE</h2>
    <p class="sub-title">プロフィール</p>
    <table class="table table-borderless">
      <tbody>
        <tr>
          <th class="fs-6" scope="row">名前</th>
          <th class="fs-6" scope="row">{{ user.user_name }}</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row">生年月日</th>
          <th class="fs-6" scope="row">{{ user.birth }}</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row">身長</th>
          <th class="fs-6" scope="row">{{ user.height }}cm</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row">血液型</th>
          <th class="fs-6" scope="row">{{ user.blood_type }}型</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row">趣味</th>
          <th class="fs-6" scope="row">{{ user.hobby }}</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row">経歴</th>
          <th class="fs-6" scope="row">{{ user.episode1 }}</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row"></th>
          <th class="fs-6" scope="row">{{ user.episode2 }}</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row"></th>
          <th class="fs-6" scope="row">{{ user.episode3 }}</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row"></th>
          <th class="fs-6" scope="row">{{ user.episode4 }}</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row"></th>
          <th class="fs-6" scope="row">{{ user.episode5 }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProfileCard",
  props: {},
  data() {
    return {
      user: [],
    };
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
        this.user = response.data.user;
        // ユーザー情報を保存
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<!-- フッター固定のナビゲーション -->
<style scoped>
.profile_card {
  background-image: url(../../assets/image/profile_card_backimg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 12px;
  height: auto;
  padding: 10px;
  max-width: 480px;
  margin: 0 auto 50px auto !important;
  text-align: left;
}
.profile_card .title {
  font-size: 24px;
}
.profile_card .sub-title {
  margin: 0;
}
.profile_card > th {
  margin: 0;
  padding: 0.25rem;
}

.table th,
.table td {
  margin: 0;
  padding: 0;
}
</style>
