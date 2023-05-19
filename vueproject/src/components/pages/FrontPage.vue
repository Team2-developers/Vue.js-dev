<template>
  <div class="background-wrapper wrapper">
    <div class="builderーarea">
      <dl class="search">
          <dt><input class="room_search rounded bg-light text-dark py-1 mb-2 rounded" type="text" placeholder="部屋を探す"></dt>
          <dd><button><span></span></button></dd>
      </dl>
      <input class="room_build rounded-pill bg-dark text-light py-1" type="button" value="部屋を作る">
    </div>
    <div class="userーarea">
      <input class="login rounded-pill  bg-light text-dark py-1 border border-dark mb-2" type="button" value="ログイン">
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
dl.search{
    width: 330px;
    margin: auto;
    position:relative;
    background-color:#fff;
}
dl.search dd{
    position:absolute;
    top:0;
    right:0;
}
dl.search dd button{
    display:block;
    padding:8px;
}
dl.search dd button span{
    display:block;
    width:20px;
    height:20px;
    background:url('../../assets//image/serch_con.svg') no-repeat scroll 0 0;
}
</style>
