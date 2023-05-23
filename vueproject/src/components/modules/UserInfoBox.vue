<template>
    <div class="userInfo">
        <img :src='img_pass' alt="ユーザー画像" class="userInfoImage">
        <div>
            <p>{{user_name}}</p>
            <p>{{user_mail}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserInfoBox',
    props: {
        img_pass : {
            type: String,
            required: false
        },
        user_name : {
            type: String,
            required: false
        },
        user_mail	: {
            type: String,
            required: false
        }
    }
}
</script>

<!-- ユーザー情報を表示するモジュール -->
<style scoped>
.userInfo{
    display: flex;
    justify-content: center;
}
</style>
