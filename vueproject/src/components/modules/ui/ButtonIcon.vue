<template>
    <input type={{submit}} class="custom-button" value={{buttonText}} />
</template>
<script lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'submit',
    },
    buttonText: {
        type: String,
        buttonClass: String,
    },
    buttonClass: {
        type:String,
        default: 'custom-button',
    },
});
</script>
<style  lang="scss" scoped>
.custom-button {
    background-color: rgb(146, 205, 220);
    color: rgb(23, 54, 93);
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    font-family: Arial, sans-serif;

    &:hover {
        background-color: rgb(120, 187, 202);
    }

    &:active {
        background-color: rgb(88, 157, 182);
    }
}
</style>