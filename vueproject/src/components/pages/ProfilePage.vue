<template>
  <UserInfoBox
    :img_pass="img_pass"
    :user_name="user_name"
    :user_mail="user_mail"
  />
  <ProfileCard />
  <div class="background-wrapper wrapper">
    <SomeoneLifeList
      :img_pass="img_pass"
      :life_name="life_name"
      :life_event="life_event"
      :good="good"
    />
  </div>
</template>

<script>
import SomeoneLifeList from '@/components/modules/SomeoneLifeList'
import ProfileCard from '../modules/ProfileCard.vue';
import UserInfoBox from '../modules/UserInfoBox.vue';

export default {
  name: 'ProfilePage',
  data () {
    return {
        img_pass: "user_noImage.svg",
        life_name: "ochinpo",
        life_event: "僕の中学生日記",
        good: 1000,
        user_mail: "test@gmail.com"
    }
  },
  props: {
  },
  components: {
    SomeoneLifeList,
    ProfileCard,
    UserInfoBox
  },
}
</script>

<!-- プロフィール画面 -->
<style scoped>
</style>
