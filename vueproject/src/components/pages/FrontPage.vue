<template>
  <div class="background-wrapper wrapper">
    <div class="builderーarea">
      <input class="room_search rounded text-dark py-1" type="button" value="部屋を探す">
      <input class="room_build rounded-pill bg-dark text-light py-1" type="button" value="部屋を作る">
    </div>
    <div class="userーarea">
      <input class="login rounded-pill  bg-light text-dark py-1" type="button" value="ログイン">
      <input class="create_account rounded-pill bg-dark text-light py-1" type="button" value="アカウントを作る">
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
.background-wrapper .builderーarea {
  padding-top: 150px;
}

.background-wrapper .userーarea {
  padding-top: 200px;
  padding-bottom: 40px;
}

.background-wrapper .builderーarea input,
.background-wrapper .userーarea input{
  display: block;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
}

.background-wrapper .builderーarea .room_build,
.background-wrapper .builderーarea .room_search{
  width: 330px;
}

.background-wrapper .builderーarea .room_search{
  background: #F2F4F5;
}

.background-wrapper .userーarea .login,
.background-wrapper .userーarea .create_account{
  width: 180px;
}

.background-wrapper .userーarea .login{
  border: 1px solid #000;
}

.background-wrapper .userーarea .create_account{

}

/* ボタン下にmarginをかける */
.background-wrapper .builderーarea input:nth-child(1),
.background-wrapper .userーarea input:nth-child(1){
  margin-bottom: 10px;
}

.background-wrapper{
  background-image: url(../../assets/image/background_grid.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>
