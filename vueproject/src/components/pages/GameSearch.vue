<template>
<div class="gameContainer wrapper">
  <GameList
    :img_pass="img_pass"
    :life_name="life_name"
    :life_img="life_img"
    :life_path="life_path"
  />
  <GameList
    :img_pass="img_pass"
    :life_name="life_name"
    :life_img="life_img"
    :life_path="life_path"
  />
  <FooterNav />
</div>
</template>

<script>
import GameList from '@/components/modules/GameList'
import FooterNav from '../modules/FooterNav.vue';

export default {
  name: 'GameSearch',
  data (){
      return{
        img_pass: 'user_noImage.svg',
        life_name: "山田の1週間",
        life_img: "sample.jpg",
        life_path: ''
      }
  },
  props: {
  },
  components: {
    GameList,
    FooterNav
}
}
</script>

<!-- ゲームの検索画面 -->
<style scoped>
.gameContainer{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 10px;
}
</style>
