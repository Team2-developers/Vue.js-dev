<template>
  <div class="background-wrapper wrapper">
    <div id="app">
      <div v-html="qr_code"></div>
    </div>
    <FooterNav />
  </div>
</template>

<script>
import FooterNav from "../modules/FooterNav.vue";

export default {
  name: "RoomCreationComplete",
  props: {},
  data() {
    return {
      qr_code: "",
    };
  },
  components: { FooterNav },
  mounted() {
    if (localStorage.qr_code) {
      this.qr_code = localStorage.getItem("qr_code");
      console.log(this.qr_code)
    }
  },
};
</script>

<!-- 部屋作成完了画面 -->
<style scoped></style>
