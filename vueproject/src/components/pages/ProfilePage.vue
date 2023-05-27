<template>
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

export default {
  name: 'ProfilePage',
  data () {
    return {
        img_pass: "user_noImage.svg",
        life_name: "ochinpo",
        life_event: "僕の中学生日記",
        good: 1000
    }
  },
  props: {
  },
  components: {
    SomeoneLifeList
  },
}
</script>

<!-- プロフィール画面 -->
<style scoped>
</style>
