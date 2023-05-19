<template>
  <div class="background-wrapper wrapper">
    <div class="builderーarea">
      <input class="room_search rounded bg-light text-dark py-1 mb-2" type="text" placeholder="部屋を探す">
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
</style>
