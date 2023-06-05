<template>
<div>
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
</div>
</template>

<script>
import GameList from '@/components/modules/GameList'

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
    GameList
  }
}
</script>

<!-- ゲームの検索画面 -->
<style scoped>
</style>
