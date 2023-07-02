<template>
  <div class="background-wrapper wrapper">
    <LifeEvent />
    <FooterNav />
  </div>
</template>

<script>
import LifeEvent from '@/components/modules/LifeEvent'
import FooterNav from '../modules/FooterNav.vue';

export default {
  name: 'GameModification',
  props: {
  },
  components: {
    LifeEvent,
    FooterNav
  }
</script>

<!-- ゲームの修正画面 -->
<style scoped>
</style>
