<template>
  <div class="background-wrapper wrapper">
    <SpeechBubble />
    <div>
      <div>スコアランキング</div>
      <div v-for="(finishUser, index) in finishOrder" :key="finishUser.name">
        <p>{{ index + 1 }}</p>
        <div>
          <img :src="finishUser.userImages" alt="ユーザー写真" />
          <p>{{ finishUser.name }}</p>
        </div>
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
    const storedFinishOrder = JSON.parse(localStorage.getItem("finishOrder"));
    if (storedFinishOrder) {
      this.finishOrder = storedFinishOrder;
    }
  },
};
</script>

<!-- ランキング画面 -->
<style scoped>
.finishUserWrapper{
  display: flex;
}
</style>
