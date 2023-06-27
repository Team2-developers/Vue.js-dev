<template>
  <!-- replace -->
  <div class="profile_card m-5 shadow-sm mb-5 bg-body rounded">
    <h2 class="title">PROFILE</h2>
    <p class="sub-title">プロフィール</p>
    <table class="table table-borderless">
      <tbody>
        <tr>
          <th class="fs-6" scope="row">名前</th>
          <th class="fs-6" scope="row">{{ profileItemsApi.user_name }}</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row">生年月日</th>
          <th class="fs-6" scope="row">{{ profileItemsApi.birth }}</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row">身長</th>
          <th class="fs-6" scope="row">{{ profileItemsApi.height }}cm</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row">血液型</th>
          <th class="fs-6" scope="row">{{ profileItemsApi.blood_type }}型</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row">趣味</th>
          <th class="fs-6" scope="row">{{ profileItemsApi.hobby }}</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row">経歴</th>
          <th class="fs-6" scope="row">{{ profileItemsApi.episode1 }}</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row"></th>
          <th class="fs-6" scope="row">{{ profileItemsApi.episode2 }}</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row"></th>
          <th class="fs-6" scope="row">{{ profileItemsApi.episode3 }}</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row"></th>
          <th class="fs-6" scope="row">{{ profileItemsApi.episode4 }}</th>
        </tr>
        <tr>
          <th class="fs-6" scope="row"></th>
          <th class="fs-6" scope="row">{{ profileItemsApi.episode5 }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  props: {},
  data() {
    return {
      profileItemsApi: {
        user_name: "山田太郎",
        birth: "2000/0/0",
        height: 174,
        blood_type: "O",
        hobby: "フットサル",
        episode1: "1990年に誕生",
        episode2: "1906年に麓小学校に入学",
        episode3: "1907年小学2年生の時に初恋",
        episode4: "1912年小学校卒業",
        episode5: "1913年中学校に入学",
      },
    };
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
}
.profile_card .sub-title {
  margin: 0;
}
.profile_card .title {
  font-size: 24px;
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
