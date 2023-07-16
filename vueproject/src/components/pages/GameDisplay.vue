<template>
  <div>
    <div class="wrapper">
      <SpeechBubble />
      <div class="gameTurn">
        <!-- スコア -->
        <div>
          <p>{{ this.userPoints[this.currentUserIndex] }}</p>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="321"
          height="411"
          viewBox="0 0 321 411"
          fill="none"
        >
          <path d="M70 0H0V70H70V0Z" fill="#E60012" />
          <path
            id="path1"
            d="M120 10.0488H70V60.0488H120V10.0488Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path2"
            d="M170 10.0488H120V60.0488H170V10.0488Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path3"
            d="M220 10.0488H170V60.0488H220V10.0488Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path4"
            d="M120 110.049H70V160.049H120V110.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path5"
            d="M170 110.049H120V160.049H170V110.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path6"
            d="M220 110.049H170V160.049H220V110.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path7"
            d="M270 10.0488H220V60.0488H270V10.0488Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path8"
            d="M120 360.049H70V410.049H120V360.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path9"
            d="M170 360.049H120V410.049H170V360.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path10"
            d="M70 310.049H20V360.049H70V310.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path11"
            d="M70 360.049H20V410.049H70V360.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path12"
            d="M220 360.049H170V410.049H220V360.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path13"
            d="M270 360H220V410H270V360Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path14"
            d="M320 10.0488H270V60.0488H320V10.0488Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path15"
            d="M320 60.0488H270V110.049H320V60.0488Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path16"
            d="M320 110.049H270V160.049H320V110.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path17"
            d="M320 160.049H270V210.049H320V160.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path18"
            d="M320 210.049H270V260.049H320V210.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path19"
            d="M320 260.049H270V310.049H320V260.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path20"
            d="M220 160.049H170V210.049H220V160.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path21"
            d="M220 210.049H170V260.049H220V210.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path22"
            d="M220 260.049H170V310.049H220V260.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path23"
            d="M70 110.049H20V160.049H70V110.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path24"
            d="M70 160.049H20V210.049H70V160.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path25"
            d="M70 210.049H20V260.049H70V210.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path26"
            d="M70 260.049H20V310.049H70V260.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path27"
            d="M320 310.049H270V360.049H320V310.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path
            id="path28"
            d="M320 360.049H270V410.049H320V360.049Z"
            fill="white"
            stroke="#231815"
            stroke-miterlimit="10"
          />
          <path d="M170 250H100V320H170V250Z" fill="#E60012" />
          <path
            d="M16.328 29.168C16.2 29.344 15.912 29.824 15.768 30.16C15.112 31.68 13.928 33.856 12.552 35.456C10.76 37.52 8.344 39.504 5.864 40.672L4.2 38.944C6.792 37.984 9.256 36.032 10.76 34.368C11.816 33.168 12.792 31.584 13.16 30.448C12.488 30.448 8.408 30.448 7.72 30.448C7.064 30.448 6.184 30.528 5.832 30.56V28.272C6.264 28.336 7.256 28.384 7.72 28.384C8.568 28.384 12.664 28.384 13.368 28.384C14.072 28.384 14.696 28.304 15.032 28.192L16.328 29.168ZM12.76 34.128C14.408 35.472 16.68 37.856 17.72 39.136L15.896 40.72C14.712 39.072 12.968 37.168 11.256 35.616L12.76 34.128ZM25.848 32.512C27.816 33.648 30.776 35.696 32.264 36.88L30.728 38.704C29.336 37.392 26.296 35.152 24.424 33.968L25.848 32.512ZM33.384 29.792C33.192 30.096 32.984 30.544 32.84 30.944C32.36 32.416 31.384 34.464 29.944 36.24C28.44 38.112 26.392 39.904 23.336 41.056L21.48 39.456C24.824 38.416 26.728 36.736 28.104 35.136C29.176 33.872 30.168 32.032 30.472 30.784H25.064L25.8 28.976H30.36C30.856 28.976 31.384 28.896 31.752 28.784L33.384 29.792ZM28.088 27.328C27.704 27.888 27.288 28.624 27.096 28.96C26.024 30.896 23.976 33.344 21.672 34.928L19.96 33.6C22.76 31.872 24.232 29.68 25.048 28.288C25.288 27.904 25.624 27.168 25.768 26.608L28.088 27.328ZM36.456 32.592C37.048 32.64 38.2 32.704 39.032 32.704C40.92 32.704 46.2 32.704 47.624 32.704C48.376 32.704 49.08 32.624 49.512 32.592V35.12C49.128 35.104 48.312 35.024 47.64 35.024C46.184 35.024 40.92 35.024 39.032 35.024C38.136 35.024 37.064 35.072 36.456 35.12V32.592ZM56.008 38.48C56.008 37.248 56.008 30.624 56.008 29.28C56.008 28.704 55.96 27.92 55.848 27.344H58.344C58.28 27.92 58.2 28.608 58.2 29.28C58.2 31.04 58.216 37.296 58.216 38.48C58.216 38.928 58.28 40.048 58.36 40.704H55.848C55.96 40.08 56.008 39.104 56.008 38.48ZM57.736 31.488C59.864 32.08 63.32 33.344 64.888 34.112L63.992 36.336C62.168 35.392 59.48 34.368 57.736 33.792V31.488Z"
            fill="white"
          />
          <path
            d="M122.936 276.591C123.352 277.183 123.912 278.159 124.2 278.751L122.856 279.311C122.552 278.623 122.04 277.743 121.624 277.135L122.936 276.591ZM125.112 276.079C125.512 276.671 126.088 277.631 126.392 278.207L125.048 278.767C124.712 278.111 124.216 277.215 123.768 276.623L125.112 276.079ZM113.112 279.103C113.72 279.167 114.552 279.215 115.096 279.215H123.16C123.624 279.215 124.296 279.183 124.568 279.167C124.552 279.551 124.52 280.175 124.52 280.655V288.943C124.52 289.487 124.552 290.335 124.584 290.831H122.264C122.28 290.351 122.296 289.775 122.296 289.183V281.279H115.112C114.424 281.279 113.576 281.311 113.112 281.343V279.103ZM112.92 287.791C113.464 287.839 114.2 287.887 114.92 287.887H123.56V289.999H114.984C114.36 289.999 113.448 290.031 112.92 290.095V287.791ZM128.456 282.543C129.048 282.591 130.2 282.655 131.032 282.655C132.92 282.655 138.2 282.655 139.624 282.655C140.376 282.655 141.08 282.575 141.512 282.543V285.071C141.128 285.055 140.312 284.975 139.64 284.975C138.184 284.975 132.92 284.975 131.032 284.975C130.136 284.975 129.064 285.023 128.456 285.071V282.543ZM151.032 289.599C151.112 289.295 151.16 288.863 151.16 288.431C151.16 287.583 151.16 280.399 151.16 279.103C151.16 278.383 151.048 277.759 151.048 277.727H153.416C153.416 277.759 153.304 278.399 153.304 279.119C153.304 280.399 153.304 286.495 153.304 287.471C154.616 286.911 156.184 285.647 157.272 284.095L158.488 285.871C157.16 287.599 154.872 289.327 153.064 290.239C152.728 290.415 152.536 290.591 152.376 290.703L151.032 289.599ZM143.624 289.375C145.048 288.383 145.912 286.911 146.344 285.535C146.808 284.175 146.824 281.135 146.824 279.215C146.824 278.559 146.76 278.143 146.664 277.743H149.016C149.016 277.807 148.904 278.527 148.904 279.183C148.904 281.087 148.856 284.463 148.44 286.079C147.944 287.871 146.952 289.455 145.576 290.671L143.624 289.375Z"
            fill="white"
          />
        </svg>
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
  </div>
</template>

<script>
import axios from "axios";
import SpeechBubble from "@/components/modules/SpeechBubble";
import FooterNav from "../modules/FooterNav.vue";

export default {
  name: "GameDisplay",
  data() {
    return {
      isActive: true,
      userArray: [[], [], [], []],
      userPoints: [0, 0, 0, 0],
      currentUserIndex: 0,
      finishOrder: [],
      assocArray: {
        0: { coordinates: [0, 0], route_detail: "", color: "", point: 0 },
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
        36: { coordinates: [100, 250], route_detail: "", color: "", point: 0 },
        37: { coordinates: [100, 250], route_detail: "", color: "", point: 0 },
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
    };
  },
  props: {},
  components: {
    FooterNav,
    SpeechBubble,
  },
  methods: {
    rollDice() {
      // this.modalToggle()
      // ゲーム終了していたら処理しない
      if (this.gameOver) {
        return;
      }
      // ゴールしたユーザーを飛ばす処理
      if (this.remainingSquares[this.currentUserIndex] <= 0) {
        do {
          this.currentUserIndex = (this.currentUserIndex + 1) % 4;
        } while (this.remainingSquares[this.currentUserIndex] <= 0);
      }

      // 振ったサイコロで進む数
      let diceValue = Math.floor(Math.random() * 6) + 1;
      // 各ユーザーの進んだマスの数を保存
      this.userArray[this.currentUserIndex].push(diceValue);
      if (this.remainingSquares[this.currentUserIndex] <= 0) {
        this.finishOrder.push({
          name: this.userName[this.currentUserIndex],
          userImages: this.userImages[this.currentUserIndex],
        });
      }

      // ユーザーのポイントを更新
      let newPosition = this.totalDiceValues[this.currentUserIndex];
      if (this.assocArray[newPosition] && this.assocArray[newPosition].point) {
        this.userPoints[this.currentUserIndex] +=
          this.assocArray[newPosition].point;
      }

      // ユーザーを次に人に変更
      this.currentUserIndex = (this.currentUserIndex + 1) % 4;
      // this.openModal(diceValue);
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

        // 最終順位の確認処理
        // ポイントと元のインデックスを紐づける
        let indexedPoints = this.userPoints.map((point, index) => {
          return { point: point, originalIndex: index };
        });

        // ポイントで降順にソート
        indexedPoints.sort((a, b) => b.point - a.point);

        // インデックス+1にマッピング
        let rankings = indexedPoints.map((item) => item.originalIndex + 1);

        // localstrageに追加
        localStorage.setItem("finishOrder", JSON.stringify(rankings));
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
  mounted() {
    // locaostorageから取得する処理
    let userImages = [];
    let userName = [];
    for (let i = 1; i <= 4; i++) {
      let key = "user" + i;
      let data = localStorage.getItem(key);
      if (data) {
        let userData = JSON.parse(data);
        userImages.push(userData.img_path);
        userName.push(userData.user_name);
      }
    }
    this.userImages = userImages;
    this.userName = userName;
    let game_id = localStorage.getItem("game_id");
    let token = localStorage.getItem("auth_token");

    // 人生取得の処理
    axios
      .get(`http://localhost:8000/api/life/${game_id}`, {
        headers: {
          Authorization: "Bearer " + token, // Laravelから取得したトークン
        },
      })
      .then((response) => {
        // responseを利用した処理
        let data = response.data.torut;
        let indices = Array.from({ length: 36 }, (_, i) => i).filter(
          (i) => ![0, 28, 29, 30, 31, 32, 33, 34, 35].includes(i)
        );

        // 配列に格納
        data.forEach((item) => {
          if (indices.length > 0) {
            // インデックス配列からランダムに選び、そのインデックスの場所にデータを挿入
            let index = indices.splice(
              Math.floor(Math.random() * indices.length),
              1
            )[0];
            this.assocArray[index].route_detail = item.trout_detail;
            this.assocArray[index].color = item.color;
            this.assocArray[index].point = item.point;
          }
        });

        // svg要素の色付け
        for (let i = 1; i <= 27; i++) {
          let pathElement = document.querySelector("#path" + i);

          // assocArrayに色情報が存在する場合のみ、色を設定
          if (this.assocArray[i] && this.assocArray[i].color) {
            pathElement.style.fill = this.assocArray[i].color;
          }
        }

        console.log(this.assocArray);
      })
      .catch((error) => {
        console.log(error);
      });
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
