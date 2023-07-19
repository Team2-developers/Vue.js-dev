<template>
  <div class="notifcation">
    <div class="userInfo">
      <img
        v-if="img_pass"
        :src="img_pass"
        alt="ユーザー画像"
        class="userInfoImage"
      />
      <div>
        <p>{{ user_name }}</p>
        <p>{{ comment }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationBanner",
  props: {
    img_pass: {
      type: String,
      required: false,
    },
    user_name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: false,
    },
    user_email: {
      type: String,
      required: true,
    },
  },
};
</script>

<!-- ユーザー情報を表示するモジュール -->
<style scoped>
.userInfo {
  background: #efefef;
  padding: 10px;
  margin-bottom: 10px;
  display: block;
  display: flex;
  border-radius: 20px;
}
</style>
