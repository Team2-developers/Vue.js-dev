<template>
    <dl class="search">
        <dt><input class="room_search rounded bg-light text-dark py-1 mb-2 rounded" type="text" placeholder="部屋を探す"></dt>
        <dd><button><span></span></button></dd>
    </dl>
</template>
<script>
export default{
    name: 'SearchInput'
}
</script>
<style scoped>
dl.search{
    width: 330px;
    margin: auto;
    position:relative;
    background-color:#fff;
}
dl.search dd{
    position:absolute;
    top:0;
    right:0;
}
dl.search dd button{
    display:block;
    padding:8px;
}
dl.search dd button span{
    display:block;
    width:20px;
    height:20px;
    background:url('../../assets//image/serch_con.svg') no-repeat scroll 0 0;
}
</style>
