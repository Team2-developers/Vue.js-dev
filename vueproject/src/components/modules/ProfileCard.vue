<template>
    <div class="profile_card">
        <p>ProfileCard</p>
        <p>UserName</p>
        <table class="table table-borderless">
            <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">生年月日</th>
                    <td>6月30日</td>
                </tr>
                <tr>
                    <th scope="row">血液型</th>
                    <td>A型</td>
                </tr>
                <tr>
                    <th scope="row">趣味</th>
                    <td>######</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ProfileCard',
    props: {
    }
}
</script>

<!-- フッター固定のナビゲーション -->
<style scoped>
.profile_card{
    background-image: url(../../assets/image/profile_card_backimg.jpg)
}
</style>
