<template>
  <div class="background-wrapper wrapper">
    <div class="builderーarea">
      <SearchInput />
      <input class="room_build rounded-pill bg-dark text-light py-1" type="button" value="部屋を作る">
    </div>
    <div class="userーarea">
      <input class="login rounded-pill  bg-light text-dark py-1 border border-dark mb-2" type="button" value="ログイン">
      <input class="create_account rounded-pill bg-dark text-light py-1" type="button" value="アカウントを作る">
    </div>
  </div>
</template>

<script>
import SearchInput from '@/components/modules/SearchInput'
export default {
  name: 'FrontPage',
  props: {
  },
  components: {
    SearchInput
  }
}
</script>

<!-- アプリホーム画面 -->
<style scoped>
</style>
