<template>
    <div class="userInfo">
        <img :src="getImagePath" alt="ユーザー画像" class="userInfoImage">
        <div>
            <p>{{user_name}}</p>
            <p>あなたの人生に「コメント」しました</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotificationBanner',
    props: {
        img_pass : {
            type: String,
            required: true
        },
        user_name : {
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
    display: flex;
    justify-content: center;
    background: #efefef;
    padding: 2px 0;
    margin: 0 50px 10px 50px;
}
.userInfo img{
    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 50%;
    object-fit: cover;
}

.userInfo div{
    text-align: left;
    margin-left: 1rem;
    line-height: 20px;
}
.userInfo div p{
    padding: 0;
    margin: 0;
}
.userInfo div p:nth-child(2){
    opacity: 0.7;
}
</style>
