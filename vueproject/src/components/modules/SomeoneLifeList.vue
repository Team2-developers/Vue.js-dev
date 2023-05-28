<template>
    <div class="profilePage">
        <!-- トグルボタン -->
        <div class="toggle_button">
            <input id="toggle" class="toggle_input" type='checkbox' v-model="selected"/>
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
        <div>
            <p>コメント</p>
            <img src="../../assets/image/corner-down-left.svg" alt="詳細">
        </div>
        <div>
            <p @click="heartClick">{{data}}</p>
            <img  class="heart" src="../../assets/image/heart-icon.svg" alt="詳細">
        </div>
    </div>
</template>

<script>
export default {
    name: 'SomeoneLifeList',
    data(){
        return{
            selected: true,
            data: 0
        }
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
    computed: {
        getImagePath() {
            this.data =  this.good;
            return require('@/assets/image/' + this.img_pass);
        },
    },
    methods: {
        heartClick() {
            this.data = this.data + 1;
        }
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
/* .profilePage::after{
    content: url(../../assets/image/corner-down-left.svg);
} */

/* トグルのcss */
.toggle_label {
    width: 50px;
    height: 25px;
    background: #ccc;
    position: relative;
    display: inline-block;
    border-radius: 40px;
    transition: 0.4s;
    box-sizing: border-box;
}

.toggle_label:after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    left: 0;
    top: 0;
    z-index: 2;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
}

.toggle_input:checked + .toggle_label {
    background-color: #3b18b9;
}

.toggle_input:checked + .toggle_label:after {
    left: 25px;
}

.toggle_button {
    position: relative;
    width: 50px;
    height: 25px;
    margin-left: auto;
    margin-right: 20px;
}
</style>
