<template>
  <div class="wrapper">
    <div class="builderーarea">
      <input class="room_search rounded bg-secondary text-light py-1" type="text" placeholder="部屋を探す">
      <input class="room_build rounded-pill bg-dark text-light py-1" type="text" value="部屋を作る">
    </div>
    <div class="builderーarea">
      <input class="login rounded-pill text-dark py-1" type="text" value="ログイン">
      <input class="create_account rounded-pill bg-dark text-light py-1" type="text" value="アカウントを作る">
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
  props: {
  }
}
</script>

<!-- アプリホーム画面 -->
<style scoped>
.wrapper .builderーarea {
  margin-top: 60px;
}

.wrapper .builderーarea input{
  display: block;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
}

.wrapper .builderーarea .room_build,
.wrapper .builderーarea .room_search{
  width: 330px;
}

.wrapper .builderーarea .room_search{
  opacity: 0.5;
}

.wrapper .builderーarea .login,
.wrapper .builderーarea .create_account{
  width: 180px;
}

.wrapper .builderーarea .login{
  border: 1px solid #000;
}

.wrapper .builderーarea .create_account{

}

/* ボタン下にmarginをかける */
.wrapper .builderーarea input:nth-child(1){
  margin-bottom: 10px;
}
</style>
