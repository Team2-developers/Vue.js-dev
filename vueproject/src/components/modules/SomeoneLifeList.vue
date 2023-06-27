<template>
    <div class="profilePage">
        <!-- トグルボタン -->
        <div class="toggle_button">
            <input id="toggle" class="toggle_input" type='checkbox' v-model="toggleSelected"/>
            <label for="toggle" class="toggle_label"/>
        </div>
        <div class="profilePageWrapper">
            <img :src="getImagePath" alt="人生ゲーム画像">
            <div>
                <p>{{life_name}}</p>
                <p>{{life_event}}</p>
            </div>
        </div>
    </div>
    <div class="profilePageComment">
        <div @click="comentDetail = !comentDetail">
            <p>コメント</p>
            <img src="../../assets/image/corner-down-left.svg" alt="詳細">
        </div>
        <div @click="updatePropValue">
            <p>{{heartCount}}</p>
            <img  class="heart" src="../../assets/image/heart-icon.svg" alt="詳細">
        </div>
    </div>
    <div :class="{'hidden': comentDetail}">
        <NotificationBanner
        :img_pass="img_pass"
        :user_name="user_name"
        :comment="comment"
    />
    </div>
</template>

<script>

import NotificationBanner from '@/components/modules/NotificationBanner'

export default {
    name: 'SomeoneLifeList',
    data(){
        return{
            toggleSelected: true,
            comentDetail: true,
            heartCount: this.good,
            user_name: "ochinpo",
            comment: "彼女できてよかったね"
        }
    },
    components: {
        NotificationBanner
    },
    props: {
        img_pass : {
            type: String,
            required: true
        },
        life_name : {
            type: String,
            required: false
        },
        life_event : {
            type: String,
            required: false
        },
        good : {
            type: Number,
            required: false
        }
    },
    methods: {
        updatePropValue(){
            console.log(this.heartCount)
            this.heartCount  = this.heartCount + 1
        }
    },
    computed: {
        getImagePath() {
            return require('@/assets/image/' + this.img_pass);
        },
    }
}
</script>

<!-- 誰かの人生を表示するためのモジュールです -->
<style scoped>

/* モジュール全体に付与するcss */
.profilePage{
    width: 100%;
    background: #D9D9D9;
    height: 125px;
    padding: 10px;
    position: relative;
}

.profilePageWrapper{
    display: flex;
}

.profilePageWrapper img{
    margin-left: 15px;
    margin-right: 50px;
    max-width: 80px;
}

.profilePageWrapper div{
    text-align: left;
    padding: 10px 0;
}

.profilePageWrapper div p{
    margin-bottom: 0;
}

.profilePageComment{
    height: 30px;
    background: white;
    width: 100%;
    text-align: left;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
}

.profilePageComment div{
    display: flex;
    vertical-align: middle;
}

.profilePageComment div p{
    margin-right: 10px;
}

.profilePageComment img{
    height: 80%;
}

/* コメント詳細の表示 */
.hidden {
    display: none;
}

</style>
