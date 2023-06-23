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
        <p>{{this.userName[this.currentUserIndex]}}</p>
      </div>
      <!-- 残りマス -->
      <div>
        <p>{{this.userArray[this.currentUserIndex].length==0 ? "29"
            :this.userArray[this.currentUserIndex].reduce((a, b) => {
              //0以下になる場合は0を返却する
              return(a - b > 0 ? a - b: 0)
            }, 29)}}
        </p>
        <p>残りマス</p>
      </div>
    </div>
    <div :class="{sample:isActive, sample2:!isActive }">
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <button @click="modalToggle">閉じる</button>
    </div>
    <div class="gameArea">
      <!-- class属性は共通部分と各クラスの初期値を分離して作成しています -->
      <img class="gameAreaimage" src="../../assets/image/lifeGameBoard.svg" alt="">
      <img v-for="(position, index) in userPositions" :key="index"
      :class="`gameUser gameUser${index+1}`"
      :style="{ top: `${position[1]}px`, left: `${position[0]}px` }"
      :src="`${userImages[index]}`"
      >
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
      isActive: true,
      img_pass: 'user_noImage.svg',
      user_name: 'test',
      life_name: '山田の人生',
      userArray: [[], [], [], []],
      currentUserIndex: 0,
      assocArray : { "1": [60, 0], "2": [120, 0], "3": [170, 0], "4": [220, 0], "5": [270, 0], "6": [260, 50], "7": [260, 100], "8": [260, 150], "9": [260, 200], "10": [260, 250], "11": [260, 300], "12": [260, 350], "13": [210, 350], "14": [160, 350], "15": [110, 350], "16": [60, 350], "17": [10, 350], "18": [10, 300], "19": [10, 250], "20": [10, 200], "21": [10, 150], "22": [10, 100], "23": [60, 100], "24": [110, 100], "25": [160, 100], "26": [160, 150], "27": [160, 200], "28": [160, 250], "29": [100, 250],"30": [100, 250],"31": [100, 250],"32": [100, 250],"34": [100, 250],"35": [100, 250] },
      initialPosition: { "gameUser1": [10, 12], "gameUser2": [30, 12], "gameUser3": [10, 36], "gameUser4": [30, 36] },
      userImages:[
        require("../../assets/image/icon1.svg"),
        require("../../assets/image/icon2.svg"),
        require("../../assets/image/icon3.svg"),
        require("../../assets/image/icon4.svg")
      ],
      userName: [
        "dog","cat","pig","sheep"
      ],
      gameOver: false
    }
  },
  props: {
  },
  components: {
    SpeechBubble
  },
  methods: {
    rollDice() {
      // this.modalToggle()
      // ゲーム終了していたら処理しない
      if (this.gameOver) {
        return;
      }
      // ゴールしたユーザーを飛ばす処理
      if(this.remainingSquares[this.currentUserIndex] <= 0  ){
        do {
          this.currentUserIndex = (this.currentUserIndex + 1) % 4;
        } while (this.remainingSquares[this.currentUserIndex] <= 0);
      }

      // 振ったサイコロで進む数
      let diceValue = Math.floor(Math.random() * 6) + 1;
      // 各ユーザーの進んだマスの数を保存
      this.userArray[this.currentUserIndex].push(diceValue);
      // ユーザーを次に人に変更
      this.currentUserIndex = (this.currentUserIndex + 1) % 4;

      setTimeout(this.PlayersFinishedCheck(),200)
    },
    modalToggle(){
      this.isActive = !this.isActive
    },
    PlayersFinishedCheck(){
      // 全プレイヤーがゴールしているかをチェックする
      const allPlayersFinished = this.remainingSquares.every(remaining => remaining <= 0);
      if (allPlayersFinished) {
        // 全プレイヤーがゴールしていたらゲームを終了する
        this.gameOver = true;
        alert("お前ら終わったんや!5秒後に終了画面に遷移します");
        return;
      }
    }
  },
   computed: {
    totalDiceValues() {
      return this.userArray.map(array => array.reduce((a, b) => a + b, 0))
    },
    remainingSquares() {
      return this.totalDiceValues.map(total =>  {return(
        29 - total > 0 ? 29 - total: 0
      )});
    },
    // 現在の位置を取得
    userPositions() {
      // valueの中に各ユーザーの情報が組み込まれています
      return this.totalDiceValues.map((value, index) => {
        let position = this.initialPosition[`gameUser${index+1}`];
        // 今回移動したマス目の情報を取得して新規位置の設定
        const movedPosition = this.assocArray[value] || [0, 0];
        return [position[0] + movedPosition[0], position[1] + movedPosition[1]];
      });
    },
  },
}
</script>

<!-- ゲームの表示画面 -->
<style scoped>
.sample{
  display: none;
}
.sample2{
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
  width: 300px;
  background: blue;
  color: white;
  padding: 1em;
  border-radius: 8px;
  z-index: 15;
}
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
