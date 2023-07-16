<template>
  <div class="authoerWrapper">
    <div>
      <img :src="getImagePath" alt="人生の作者" />
      <p>{{ user_name }}</p>
    </div>
    <p class="authoerTitle">{{ life_name }}</p>
  </div>
</template>

<script>
export default {
  name: "SpeechBubble",
  props: {},
  data() {
    return {
      img_pass: "user_noImage.svg",
      user_name: "test",
      life_name: "山田の人生",
    };
  },
  computed: {
    getImagePath() {
      return require("@/assets/image/" + this.img_pass);
    },
  },
  mounted (){
    if(localStorage.getItem("game_name")){
      let game_name = localStorage.getItem("game_name");
      this.life_name = game_name
    }
  }
};
</script>

<!-- 作成したゲーム(作製未も含む)を表示するためのモジュール -->
<style scoped>
.authoerWrapper {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 0 20px;
}
.authoerWrapper img {
  max-width: 40px;
}
.authoerTitle {
  color: #6c7072;
  font-weight: bold;
  background: #f2f4f5;
  width: 250px;
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding-left: 10px;
  border-radius: 10px;
}
</style>
