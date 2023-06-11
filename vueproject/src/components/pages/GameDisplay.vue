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
      <img class="gameUser gameUser1"
        :style="{ top: `${user1Position[1]}px`, left: `${user1Position[0]}px` }"
        src="../../assets/image/user_noImage.svg"
      >
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
      userArray1: [],
      assocArray : { "1": [60, 0], "2": [120, 0], "3": [170, 0], "4": [220, 0], "5": [270, 0], "6": [260, 50], "7": [260, 100], "8": [260, 150], "9": [260, 200], "10": [260, 250], "11": [260, 300], "12": [260, 350], "13": [210, 350], "14": [160, 350], "15": [110, 350], "16": [60, 350], "17": [10, 350], "18": [10, 300], "19": [10, 250], "20": [10, 200], "21": [10, 150], "22": [10, 100], "23": [60, 100], "24": [110, 100], "25": [160, 100], "26": [160, 150], "27": [160, 200], "28": [160, 250], "29": [100, 250] },
      initialPosition: { "gameUser1": [10, 12], "gameUser2": [30, 12], "gameUser3": [10, 36], "gameUser4": [30, 36] }  // gameUser1's initial position
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
      this.userArray1.push(diceValue)
      alert(this.userArray1)
    }
  },
   computed: {
    totalDiceValue1() {
      return this.userArray1.reduce((a, b) => a + b, 0);
    },
    user1Position() {
      let position = this.initialPosition.gameUser1;
      const movedPosition = this.assocArray[this.totalDiceValue1] || [0, 0];
      position = [position[0] + movedPosition[0], position[1] + movedPosition[1]];
      return position;
    },
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
  top: 12px;
  left: 10px;
}
.gameUser2{
  top: 12px;
  left: 30px;
}
.gameUser3{
  top: 36px;
  left: 10px;
}
.gameUser4{
  top: 36px;
  left: 30px;
}
</style>
