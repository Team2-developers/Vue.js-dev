<template>
<div class="background-wrapper wrapper">
  <SpeechBubble
    :img_pass="img_pass"
    :user_name="user_name"
    :life_name	="life_name"
  />
</div>
</template>

<script>
import SpeechBubble from '@/components/modules/SpeechBubble'

export default {
  name: 'GameDisplay',
  data(){
    return{
      img_pass: 'user_noImage.svg',
      user_name: 'ochinpo',
      life_name: '山田の人生'
    }
  },
  props: {
  },
  components: {
    SpeechBubble
  },
}
</script>

<!-- ゲームの表示画面 -->
<style scoped>
</style>
