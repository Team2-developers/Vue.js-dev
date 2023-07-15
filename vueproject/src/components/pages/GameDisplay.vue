<template>
  <div class="wrapper">
    <SpeechBubble />
    <div class="gameTurn">
      <!-- スコア -->
      <div>
        <p>0</p>
        <p>スコア</p>
      </div>
      <!-- 順番 -->
      <div>
        <p>{{ this.userName[this.currentUserIndex] }}</p>
      </div>
      <!-- 残りマス -->
      <div>
        <p>
          {{
            this.userArray[this.currentUserIndex].length == 0
              ? "29"
              : this.userArray[this.currentUserIndex].reduce((a, b) => {
                  //0以下になる場合は0を返却する
                  return a - b > 0 ? a - b : 0;
                }, 29)
          }}
        </p>
        <p>残りマス</p>
      </div>
    </div>
    <div :class="{ sample: isActive, sample2: !isActive }">
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <button @click="modalToggle">閉じる</button>
    </div>
    <div class="gameArea">
      <!-- class属性は共通部分と各クラスの初期値を分離して作成しています -->
      <img
        class="gameAreaimage"
        src="../../assets/image/lifeGameBoard.svg"
        alt=""
      />
      <img
        v-for="(position, index) in userPositions"
        :key="index"
        :class="`gameUser gameUser${index + 1}`"
        :style="{ top: `${position[1]}px`, left: `${position[0]}px` }"
        :src="`${userImages[index]}`"
      />
    </div>
    <button class="rollDice" @click="rollDice">サイコロを振る</button>
  </div>
  <div v-if="isModalOpen" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <p style="text-align: center">出た数は...<br />{{ this.diceValue }}</p>
    </div>
  </div>
  <FooterNav />
</template>

<script>
import SpeechBubble from "@/components/modules/SpeechBubble";
import FooterNav from "../modules/FooterNav";

export default {
  name: "GameDisplay",
  data() {
    return {
      isActive: true,
      userArray: [0, 0, 0, 0],
      currentUserIndex: 0,
      finishOrder: [],
      assocArray: {
        1: { coordinates: [60, 0], route_detail: "", color: "", point: 0 },
        2: { coordinates: [120, 0], route_detail: "", color: "", point: 0 },
        3: { coordinates: [170, 0], route_detail: "", color: "", point: 0 },
        4: { coordinates: [220, 0], route_detail: "", color: "", point: 0 },
        5: { coordinates: [270, 0], route_detail: "", color: "", point: 0 },
        6: { coordinates: [260, 50], route_detail: "", color: "", point: 0 },
        7: { coordinates: [260, 100], route_detail: "", color: "", point: 0 },
        8: { coordinates: [260, 150], route_detail: "", color: "", point: 0 },
        9: { coordinates: [260, 200], route_detail: "", color: "", point: 0 },
        10: { coordinates: [260, 250], route_detail: "", color: "", point: 0 },
        11: { coordinates: [260, 300], route_detail: "", color: "", point: 0 },
        12: { coordinates: [260, 350], route_detail: "", color: "", point: 0 },
        13: { coordinates: [210, 350], route_detail: "", color: "", point: 0 },
        14: { coordinates: [160, 350], route_detail: "", color: "", point: 0 },
        15: { coordinates: [110, 350], route_detail: "", color: "", point: 0 },
        16: { coordinates: [60, 350], route_detail: "", color: "", point: 0 },
        17: { coordinates: [10, 350], route_detail: "", color: "", point: 0 },
        18: { coordinates: [10, 300], route_detail: "", color: "", point: 0 },
        19: { coordinates: [10, 250], route_detail: "", color: "", point: 0 },
        20: { coordinates: [10, 200], route_detail: "", color: "", point: 0 },
        21: { coordinates: [10, 150], route_detail: "", color: "", point: 0 },
        22: { coordinates: [10, 100], route_detail: "", color: "", point: 0 },
        23: { coordinates: [60, 100], route_detail: "", color: "", point: 0 },
        24: { coordinates: [110, 100], route_detail: "", color: "", point: 0 },
        25: { coordinates: [160, 100], route_detail: "", color: "", point: 0 },
        26: { coordinates: [160, 150], route_detail: "", color: "", point: 0 },
        27: { coordinates: [160, 200], route_detail: "", color: "", point: 0 },
        28: { coordinates: [160, 250], route_detail: "", color: "", point: 0 },
        29: { coordinates: [100, 250], route_detail: "", color: "", point: 0 },
        30: { coordinates: [100, 250], route_detail: "", color: "", point: 0 },
        31: { coordinates: [100, 250], route_detail: "", color: "", point: 0 },
        32: { coordinates: [100, 250], route_detail: "", color: "", point: 0 },
        34: { coordinates: [100, 250], route_detail: "", color: "", point: 0 },
        35: { coordinates: [100, 250], route_detail: "", color: "", point: 0 },
      },
      initialPosition: {
        gameUser1: [10, 12],
        gameUser2: [30, 12],
        gameUser3: [10, 36],
        gameUser4: [30, 36],
      },
      userImages: [
        require("../../assets/image/icon1.svg"),
        require("../../assets/image/icon2.svg"),
        require("../../assets/image/icon3.svg"),
        require("../../assets/image/icon4.svg"),
      ],
      diceValue: 0,
      isModalOpen: false,
      userName: ["dog", "cat", "pig", "sheep"],
      gameOver: false,

      // ローカルストレージようの配列
    };
  },
  props: {},
  components: {
    FooterNav,
    SpeechBubble,
  },
  methods: {
    rollDice() {
      // ゲーム終了していたら処理しない
      if (this.gameOver) {
        return;
      }

      // ゴールしたユーザーを飛ばす処理
      if (this.remainingSquares[this.currentUserIndex] <= 0) {
        do {
          // ローカルストレージで保存する
          this.currentUserIndex = (this.currentUserIndex + 1) % 4;
        } while (this.remainingSquares[this.currentUserIndex] <= 0);
      }

      // 振ったサイコロで進む数
      let diceValue = Math.floor(Math.random() * 6) + 1;
      // 各ユーザーの進んだマスの数を保存
      this.userArray[this.currentUserIndex] += diceValue;

      if (this.remainingSquares[this.currentUserIndex] <= 0) {
        this.finishOrder.push({
          name: this.userName[this.currentUserIndex],
          userImages: this.userImages[this.currentUserIndex],
        });
      }

      // ユーザーを次に人に変更
      this.currentUserIndex = (this.currentUserIndex + 1) % 4;

      // this.openModal(diceValue); <- testのためコメントアウト
      this.PlayersFinishedCheck();
    },
    modalToggle() {
      this.isActive = !this.isActive;
    },
    PlayersFinishedCheck() {
      // 全プレイヤーがゴールしているかをチェックする
      const allPlayersFinished = this.remainingSquares.every(
        (remaining) => remaining <= 0
      );
      if (allPlayersFinished) {
        // 全プレイヤーがゴールしていたらゲームを終了する
        this.gameOver = true;
        // localstrageに追加
        localStorage.setItem("finishOrder", JSON.stringify(this.finishOrder));

        alert("お前ら終わったんや!2秒後に終了画面に遷移します");

        // 画面遷移
        setTimeout(() => {
          document.location = "GameRanking";
        }, 2000);
        return;
      }
    },
    openModal(diceValue) {
      this.isModalOpen = true;
      this.diceValue = diceValue;
      // 3秒後にモーダルを非表示にする
      setTimeout(() => {
        this.isModalOpen = false;
      }, 1000);
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
  computed: {
    totalDiceValues() {
      return this.userArray.map((array) => array.reduce((a, b) => a + b, 0));
    },
    remainingSquares() {
      return this.totalDiceValues.map((total) => {
        return 29 - total > 0 ? 29 - total : 0;
      });
    },
    // 現在の位置を取得
    userPositions() {
      // valueの中に各ユーザーの情報が組み込まれています
      return this.totalDiceValues.map((value, index) => {
        let position = this.initialPosition[`gameUser${index + 1}`];
        // 今回移動したマス目の情報を取得して新規位置の設定
        const movedPosition = this.assocArray[value].coordinates || [0, 0];
        return [position[0] + movedPosition[0], position[1] + movedPosition[1]];
      });
    },
  },
};
</script>

<!-- ゲームの表示画面 -->
<style scoped>
.sample {
  display: none;
}
.sample2 {
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
.gameTurn {
  display: flex;
  justify-content: space-around;
  margin-bottom: none;
}
.gameTurn div p:first-child {
  background: #c6e8f9;
  padding: 5px 0;
}
.gameTurn div:nth-child(2) {
  height: 40px;
  width: 200px;
  line-height: 40px;
}
.gameTurn p {
  margin-bottom: 0;
}
.gameArea {
  max-width: 320px;
  text-align: center;
  margin: 30px auto 0;
  position: relative;
  z-index: 1;
}
.rollDice {
  border-radius: 15px;
  margin-top: 20px;
  padding: 10px;
  background: black;
  color: white;
}
.gameUser {
  z-index: 10;
  position: absolute;
  width: 20px;
}
.gameUser1 {
  top: 12px;
  left: 10px;
}
.gameUser2 {
  top: 12px;
  left: 30px;
}
.gameUser3 {
  top: 36px;
  left: 10px;
}
.gameUser4 {
  top: 36px;
  left: 30px;
}
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  margin: 25% auto;
  padding: 10px;
  border: 1px solid #888;
  width: 30%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
