<template>
  <div class="background-wrapper wrapper">
    <h2>通知</h2>
    <UserInfoBox
        :img_pass="img_pass"
        :user_name="user_name"
        :user_mail="user_mail"
    />
  </div>
</template>

<script>
import UserInfoBox from '@/components/modules/UserInfoBox'

export default {
  name: 'NotificationPanel',
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
    UserInfoBox
  }
}
</script>

<!-- 通知画面 -->
<style scoped>
</style>
