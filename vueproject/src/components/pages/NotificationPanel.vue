<template>
  <div class="background-wrapper wrapper">
    <h2>通知</h2>
    <NotificationBanner
        :img_pass="img_pass"
        :user_name="user_name"
    />
    <FooterNav />
  </div>
</template>

<script>
import NotificationBanner from '@/components/modules/NotificationBanner'
import FooterNav from '../modules/FooterNav.vue';

export default {
  name: 'NotificationPanel',
  data () {
    return {
        img_pass: "user_noImage.svg",
        user_name: "ochinpo",
        comment: "あなたの人生に「コメント」しました"
    }
  },
  props: {
  },
  components: {
    NotificationBanner,
    FooterNav
}
}
</script>

<!-- 通知画面 -->
<style scoped>
</style>
