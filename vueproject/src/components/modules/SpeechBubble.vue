<template>
    <div class="authoerWrapper">
        <div>
            <img :src="getImagePath" alt="人生の作者">
            <p>{{user_name}}</p>
        </div>
        <p class="authoerTitle">{{life_name}}</p>
    </div>
</template>

<script>
export default {
    name: 'SpeechBubble',
    props: {
        img_pass : {
            type: String,
            required: true
        },
        user_name : {
            type: String,
            required: false
        },
        life_name : {
            type: String,
            required: false
        },
    },
    computed: {
        getImagePath() {
            return require('@/assets/image/' + this.img_pass);
        }
    }
}
</script>

<!-- 作成したゲーム(作製未も含む)を表示するためのモジュール -->
<style scoped>
.authoerWrapper{
    display: flex;
    justify-content: space-between;
    padding: 20px;
}
.authoerWrapper img{
    max-width: 40px;
}
.authoerTitle{
    color: #6C7072;
    font-weight: bold;
    background: #F2F4F5;
    width: 250px;
    height: 40px;
    line-height: 40px;
    text-align: left;
    padding-left: 10px;
    border-radius: 10px;
}
</style>
