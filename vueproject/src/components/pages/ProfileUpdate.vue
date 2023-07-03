<template>
  <div class="background-wrapper wrapper">
    <div class="text-input">
      <input type="text" id="input1" placeholder="山田太郎">
      <label for ="input1">名前</label>
    </div>
    <div class="text-input">
      <input type="text" id="input2" placeholder="読書・フットサル">
      <label for ="input2">趣味</label>
    </div>
    <div class="text-input">
      <input type="text" id="input3" placeholder="1990年に誕生">
      <label for ="input3">エピソード１</label>
    </div>
    <div class="text-input">
      <input type="text" id="input4" placeholder="1996年に小学校に入学">
      <label for ="input4">エピソード2</label>
    </div>
    <div class="text-input">
      <input type="text" id="input5" placeholder="1997年小学2年の時に初恋">
      <label for ="input5">エピソード３</label>
    </div>
    <div class="text-input">
      <input type="text" id="input6" placeholder="2002年小学校卒業">
      <label for ="input6">エピソード4</label>
    </div>
    <div class="text-input">
      <input type="text" id="input7" placeholder="2003年中学校に入学">
      <label for ="input7">エピソード５</label>
    </div>
    <FooterNav />
  </div>
</template>

<script>
import FooterNav from '../modules/FooterNav.vue';

export default {
    name: "ProfileUpdate",
    props: {},
    components: { FooterNav }
}
</script>

<!-- プロフィール更新画面 -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Montserrat;
  background: #313E50;
}

.text-input {
  position: relative;
}

.text-input input[type="text"] {
  display: inline-block;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 10px 10px 10px 100px;
  transition: all 0.1s ease-out;
  background: white;
}

.text-input input[type="text"] + label {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 40px;
  width: 30%;
  line-height: 40px;
  color: white;
  border-radius: 3px 0 0 3px;
  padding: 0 20px;
  background: #E03616;
  transform: translateZ(0) translateX(0);
  transition: all 0.3s ease-in;
  transition-delay: 0.2s;
}

.text-input input[type="text"]:focus + label {
  transform: translateY(-120%) translateX(0%);
  border-radius: 3px;
  transition: all 0.1s ease-out;
}

.text-input input[type="text"]:focus {
  padding: 10px;
  transition: all 0.3s ease-out;
  transition-delay: 0.2s;
}
</style>