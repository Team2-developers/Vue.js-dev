<template>
<div class=" wrapper">
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
    <div class="gameArea">
      <img class="gameAreaimage" src="../../assets/image/lifeGameBoard.svg" alt="">
      <img class="gameUser gameUser1" src="../../assets/image/user_noImage.svg">
      <img class="gameUser gameUser2" src="../../assets/image/user_noImage.svg">
      <img class="gameUser gameUser3" src="../../assets/image/user_noImage.svg">
      <img class="gameUser gameUser4" src="../../assets/image/user_noImage.svg">
    </div>
    <button class="rollDice" @click="rollDice">サイコロを振る</button>
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
      life_name: '山田の人生',
      assocArray:{
        "1": [0, 60],
        "2": [0, 120],
        "3": [0, 170],
        "4": [0, 220],
        "5": [0, 270],
        "6": [50, 260],
        "7": [100, 260],
        "8": [150, 260],
        "9": [200, 260],
        "10": [250, 260],
        "11": [300, 260],
        "12": [350, 260],
        "13": [350, 210],
        "14": [350, 160],
        "15": [350, 110],
        "16": [350, 60],
        "17": [350, 10],
        "18": [300, 10],
        "19": [250, 10],
        "20": [200, 10],
        "21": [150, 10],
        "22": [100, 10],
        "23": [100, 60],
        "24": [100, 110],
        "25": [100, 160],
        "26": [150, 160],
        "27": [200, 160],
        "28": [250, 160],
        "29": [250, 100],
      }
    }
  },
  props: {
  },
  components: {
    SpeechBubble
  },
  methods: {
     rollDice() {
      let diceValue = Math.floor(Math.random() * 6) + 1;
      alert(diceValue)
     }
  }
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
.gameArea{
  max-width: 320px;
  text-align: center;
  margin: 30px auto 0;
  position: relative;
}
.rollDice{
  border-radius: 15px;
  margin-top: 20px;
  padding: 10px;
  background: black;
  color: white;
}
.gameUser{
  z-index: 10;
  position: absolute;
  width: 20px;
}
.gameUser1{
  top: 262px;
  left: 110px;
}
.gameUser2{
  top: 262px;
  left: 130px;
}
.gameUser3{
  top: 286px;
  left: 110px;
}
.gameUser4{
  top: 286px;
  left: 130px;
}
</style>
