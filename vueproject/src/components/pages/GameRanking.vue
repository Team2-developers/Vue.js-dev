<template>
  <div class="background-wrapper wrapper">
    <SpeechBubble />
    <div>
      <div class="score-title">スコアランキング</div>
      <div
        v-for="(finishUser, index) in finishOrder"
        :key="finishUser.name"
        class="score-wrapper"
      >
        <p class="score">{{ index + 1 }}</p>
        <div>
          <img
            :src="finishUser.img_path"
            alt="ユーザー写真"
            class="score-img"
          />
          <p>{{ finishUser.name }}</p>
        </div>
        <!-- ポイントを表示 -->
        <div class="user-area">
          <p>{{ finishUser.user_name }}</p>
          <p>{{ finishUser.user_mail }}</p>
        </div>
        <p>ポイント: {{ finishUser.point }}</p>
      </div>

      <div class="homeArea">
        <RouterLink :to="'/'" class="home"> ホームに戻る </RouterLink>
      </div>
    </div>
    <FooterNav />
  </div>
</template>

<script>
import FooterNav from "../modules/FooterNav";
import SpeechBubble from "../modules/SpeechBubble";

export default {
  name: "GameRanking",
  props: {},
  data() {
    return {
      finishOrder: [],
    };
  },
  components: {
    SpeechBubble,
    FooterNav,
  },
  created() {
    const storedRankingData = JSON.parse(localStorage.getItem("rankingData"));
    if (storedRankingData) {
      const mappedRankingData = storedRankingData.map((item) => {
        const userId = item.originalIndex + 1; // originalIndexに+1した値がuserIdとなる
        const storedUserData = JSON.parse(
          localStorage.getItem(`user${userId}`)
        );
        return {
          ...item,
          ...storedUserData,
        };
      });
      this.finishOrder = mappedRankingData;
    }
  },
};
</script>

<!-- ランキング画面 -->
<style scoped>
p {
  margin: 0;
  padding: 0;
}
.finishUserWrapper {
  display: flex;
}
.user-area {
  width: 150px;
}
.user-area p {
  line-height: 30px;
  text-align: left;
}
.score-title {
  background: black;
  color: white;
  padding: 10px 0;
  font-size: 16px;
  margin: 10px auto 50px;
  width: 200px;
  border-radius: 20px;
}
.score {
  font-size: 24px;
  font-weight: bold;
}
.score-wrapper {
  display: flex;
  line-height: 60px;
  justify-content: space-around;
  background: white;
  margin: 0 20px;
  padding: 10px;
  border: 0.5px solid #b6b6b6;
  margin-bottom: 20px;
}
.score-img {
  width: 60px;
  height: auto;
}
.home {
  background: black;
  color: white;
  margin: 5px 0;
  border-radius: 20px;
  padding: 10px;
  width: 200px;
}
.homeArea{
  margin-top: 50px;
}
</style>
