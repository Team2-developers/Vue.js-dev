<template>
    <div>
        <select v-model="selectedEvent">
            <option disabled value="">イベント</option>
            <!-- この部分にnameプロパティと連動させたcssプロパティも付与したい -->
            <!-- 下向き矢印も追加 -->
            <option v-for="event in events"
                v-bind:value=event.name
                v-bind:key=event.id
                >{{event.name}}
            </option>
        </select>
        <!-- pointの値が一意になっている -->
        <select v-model="selectedEvent">
            <option disabled value="">ポイント</option>
            <!-- この部分にnameプロパティと連動させたcssプロパティも付与したい -->
            <!-- 下向き矢印も追加 -->
            <option v-for="point in points"
                v-bind:value=point.score
                v-bind:key=point.id
                >{{point.score}}
            </option>
        </select>
        <input type="text">
    </div>
</template>

<script>
export default {
    name: 'LifeEvent',
    data (){
        return{
            selectedEvent: '',
            // eventごとに規定のポイントを設定しておく
            events: [
                {id: 1, name: "red"},
                {id: 2, name: "yellow"},
                {id: 3, name: "green"},
                {id: 4, name: "blue"},
                {id: 5, name: "black"}
            ],
            points: [
                {id: 1, score: -5},
                {id: 2, score: -3},
                {id: 3, score: 0},
                {id: 4, score: 3},
                {id: 5, score: 5}
            ]
        }
    },
    props: {
    }
}
</script>

<!-- 人生の修正表示のcomponent -->
<style scoped>
</style>
