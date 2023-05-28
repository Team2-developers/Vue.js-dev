<template>
    <div class="userInfo">
        <img :src="getImagePath" alt="ユーザー画像" class="userInfoImage">
        <div>
            <p>{{user_name}}</p>
            <p>{{comment}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotificationBanner',
    props: {
        img_pass: {
            type: String,
            required: true
        },
        user_name: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: false
        }
    },
    computed: {
        getImagePath() {
        return require('@/assets/image/' + this.img_pass);
        }
    }
}
</script>

<!-- ユーザー情報を表示するモジュール -->
<style scoped>
.userInfo{
    background: #efefef;
    padding: 10px;
}
</style>
