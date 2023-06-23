<template>
  <div class="background-wrapper wrapper">
            <div class="userーarea">
    <div class="centered-container">
      <input class="user_name rounded bg-light text-dark py-1 mb-2 rounded" type="text" placeholder="ユーザー名" style="width: 300px;">
      <div class="spacer"></div> 
      <input class="user_password rounded bg-light text-dark py-1 mb-2 rounded" type="text" placeholder="パスワード" style="width: 300px;">
      <div class="spacer"></div> 
      <input class="login rounded-pill bg-dark text-light py-1" type="button" value="ログイン" style="width: 150px;">
      <div class="spacer"></div> 
          </div>
    </div>
    <FooterNav />
  </div>
</template>

<script>
import FooterNav from '../modules/FooterNav.vue';

export default {
  name: 'LoginPage',
  data() {
    return {
      img_pass: "user_noImage.svg",
      user_name: "ochinpo",
      user_mail: "test@gmail.com",
    };
  },
  props: {},
  components: {
    FooterNav,
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
