<template>
  <div class="background-wrapper wrapper">
    <h2>通知</h2>
    <NotificationBanner
        :img_pass="img_pass"
        :user_name="user_name"
    />
  </div>
</template>

<script>
import NotificationBanner from '@/components/modules/NotificationBanner'

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
    NotificationBanner
  }
}
</script>

<!-- 通知画面 -->
<style scoped>
</style>
