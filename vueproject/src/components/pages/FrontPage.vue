<template>
  <div class="background-wrapper wrapper">
    <div class="builderーarea">
      <SearchInput />
      <input class="room_build rounded-pill bg-dark text-light py-1" type="button" value="部屋を作る">
    </div>
    <div class="userーarea">
      <input class="login rounded-pill  bg-light text-dark py-1 border border-dark mb-2" type="button" value="ログイン">
      <input class="create_account rounded-pill bg-dark text-light py-1" type="button" value="アカウントを作る">
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
import SearchInput from '@/components/modules/SearchInput'
import UserInfoBox from '@/components/modules/UserInfoBox'
import FooterNav from '../modules/FooterNav.vue';

export default {
  name: 'FrontPage',
  data () {
    return {
        img_pass: "user_noImage.svg",
        user_name: "ochinpo",
        user_mail: "test@gmail.com"
    }
  },
  props: {
  },
  components: {
    SearchInput,
    UserInfoBox,
    FooterNav,
}
}
</script>

<!-- アプリホーム画面 -->
<style scoped>
</style>
