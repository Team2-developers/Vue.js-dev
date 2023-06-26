<template>
  <div class="background-wrapper wrapper">

    <div class="navbar">
      <div class="container-fluid">
        <RouterLink :to="'../'+profileUpdate">
          <img src="@/assets/image/transition-icon.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
        </RouterLink>
      </div>
      <div  class="fs-4 d-flex justify-content-center">My Details</div>
    </div>
    <div class="UserInfo">
    </div>
    <button >変更する</button>
    
    <!--ProfileCard-->
    <div class="profileCard h6 flex-column justify-content-center">
      <tr v-for="formItem in formItems" :key="formItem.id" class="fs-5">
        <th  class="">
          <div>{{ formItem.name }}</div>
        </th>
        <td class="">
          <div>{{ formItem.content }}</div>
        </td>
      </tr>
    </div>

    <!--input Questions-->
    <div v-for="formItem in formItems" :key="formItem.id" class="formItem">
      {{ formItem.name }}  <input v-model="formItem.content"  placeholder="edit me">
      <hr>
    </div>

    <input type="button" onSubmit="#" class="" placeholder="更新する">
    
    <FooterNav />
  </div>
</template>

<script>
import FooterNav from '../modules/FooterNav.vue';

export default {
    name: "ProfileUpdate",
    props: {
      img_pass : {
        type: String,
        required: true
      }
    },
        data () {
      return {
        formItems :[
          {id: 1, name: "名前", content: "山田 太郎"},
          {id: 2, name: "生年月日", content: "1900/02/10"},
          {id: 3, name: "身長", content: "174"},
          {id: 4, name: "血液型", content: "O"},
          {id: 5, name: "趣味", content: "読書・フットサル"},
          {id: 6, name: "エピソード１", content: "１９９０年に誕生"},
          {id: 7, name: "エピソード２", content: "１９０７年小学二年生の時に初恋"},
          {id: 8, name: "エピソード３", content: "１９１２年に小学校卒業"},
          {id: 9, name: "エピソード４", content: "１９１３年中学校に入学"},
          {id: 10, name: "エピソード５", content: "１９１４年に隕石が落ちる"},
        ]
      }
    },
    components: { FooterNav }
}
</script>

<!-- プロフィール更新画面 -->
<style scoped>
</style>
