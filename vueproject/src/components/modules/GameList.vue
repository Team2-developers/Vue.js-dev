<template>
    <div class="gameList">
        <img :src="getImageLifePath" alt="人生サムネ">
        <div class="gameListIcon">
            <img :src="getImagePath" alt="人生の作者">
            <p>{{life_name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GameList',
    props: {
        img_pass : {
            type: String,
            required: true
        },
        life_img : {
            type: String,
            required: false
        },
        life_name : {
            type: String,
            required: false
        },
        life_path : {
            type: String,
            required: false
        }
    },
    computed: {
        getImagePath() {
            return require('@/assets/image/' + this.img_pass);
        },
        getImageLifePath() {
            return require('@/assets/image/' + this.life_img);
        }
    }
}
</script>

<!-- 作成したゲーム(作製未も含む)を表示するためのモジュール -->
<style scoped>
.gameList{
    max-width: 200px;
}
.gameListIcon{
    display: flex;
    justify-content: space-between;
    height: 40px;
}
.gameListIcon img{
    height: 100%;
}
.gameListIcon p{
    line-height: 40px;
    height: 100%;
    vertical-align: middle;
}
</style>
