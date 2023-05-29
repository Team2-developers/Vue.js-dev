<template>
  <div id="appFooterNav" class="card fixed-bottom text-center h-56">
    <ul class="nav d-flex card-footer p-0 text-white">
      <li class="nav-item flex-fill">
        <a href="/" class="nav-link active">
          <img src="../../assets/image/home-icon.svg" alt="Feed" srcset="">
          <div class="text-dark">Feed</div>
        </a>
      </li>
      <li class="nav-item flex-fill">
        <a href="/gamesearch" class="nav-link active">
          <img src="../../assets/image/search-icon.svg" alt="Search" srcset="">
          <div class="text-dark">Search</div>
        </a>
      </li>
      <li class="nav-item flex-fill">
        <a href="/notificationPanel" class="nav-link active">
          <img src="../../assets/image/bell-icon.svg" alt="Notifications" srcset="">
          <div class="text-dark">Notifications</div>
        </a>
      </li>
      <li class="nav-item flex-fill">
        <a href="/profilePage" class="nav-link active">
          <img src="../../assets/image/vector-icon.svg" alt="Me" srcset="">
          <div class="text-dark">Me</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'FooterNav',
    props: {
    }
  }
</script>

<!-- フッター固定のナビゲーション -->
<style scoped>
</style>
