<template>
    <div class="profile_card m-5 shadow-sm mb-5 bg-body rounded">
        <table class="table table-borderless">
            <tbody>
                <tr v-for="profileItem in profileItems" :key="profileItem.index">
                    <th class="fs-6" scope="row">{{ profileItem.title}}</th>
                    <th class="fs-6" scope="row">{{ profileItem.content}}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ProfileCard',
    props: {
    },
    data() {
        return {
            profileItems :[
                {index:1, title: "生年月日",content: "７月９日"},
                {index:2, title: "血液型",content: "A" },
                {index:3, title: "趣味", content: "読書"}
            ]
        }
    }
}
</script>

<!-- フッター固定のナビゲーション -->
<style scoped>
.profile_card{
    background-image: url(../../assets/image/profile_card_backimg.jpg)
}
.profile_card > th {
    margin: 0;
    padding: 0.25rem;
}
.background-wrapper :not(background-image){
}
</style>
