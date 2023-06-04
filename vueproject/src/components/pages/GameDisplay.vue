<template>
<div class="background-wrapper wrapper">
  <SpeechBubble
    :img_pass="img_pass"
    :user_name="user_name"
    :life_name	="life_name"
  />
  <div class="gameTurn">
      <!-- スコア -->
      <div>
        <p>0</p>
        <p>スコア</p>
      </div>
      <!-- 順番 -->
      <div>
        <p>山田太郎</p>
      </div>
      <!-- 残りマス -->
      <div>
        <p>30/30</p>
        <p>残りマス</p>
      </div>
    </div>
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
.gameTurn{
  display: flex;
  justify-content: space-around;
  margin-bottom: none;
}
.gameTurn div p:first-child{
  background: #C6E8F9;
  padding: 5px 0;
}
.gameTurn div:nth-child(2){
  height: 40px;
  width: 200px;
  line-height: 40px;
}
.gameTurn p{
  margin-bottom: 0;
}
</style>
