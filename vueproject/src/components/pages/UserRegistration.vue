<template>
  <div class="background-wrapper wrapper">
    <div class="navbar">
      <div class="container-fluid">
        <RouterLink :to="'../ProfilePage'">
          <img
            src="@/assets/image/transition-icon.svg"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
        </RouterLink>
      <div class=" col align-self-center">My Details</div>
      </div>
    </div>

    <form @submit.prevent="submitImage" class="formItem">
      <label from="formFileSm" class="formlabel">
        <input type="file" @change="onFileChange" class="form-control"/>
      </label>
      <button class="btn-submit btn" type="submit">Submit</button>
    </form>

    <form @submit.prevent="submitForm" class="formItem">
      <div >
        <label >Email: </label>
        <input
          type="email"
          v-model="user.user_mail"
          required
          placeholder="edit me"
        />
      </div>
      <div>
        <label>Name: </label>
        <input
          type="text"
          v-model="user.user_name"
          required
          placeholder="edit me"
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          v-model="user.password"
          required
          placeholder="edit me"
        />
      </div>

      <ProfileCard style="margin:2rem;"/>

      <div>
        <label>Height: </label>
        <input type="number" v-model="user.height" placeholder="edit me" />
      </div>
      <div>
        <label>Birth: </label>
        <input type="date" v-model="user.birth" placeholder="edit me" />
      </div>
      <div>
        <label>Blood Type: </label>
        <input type="text" v-model="user.blood_type" placeholder="edit me" />
      </div>
      <div>
        <label>hobby </label>
        <input type="text" v-model="user.hobby" placeholder="edit me" />
      </div>
      <div v-for="i in 5" :key="i">
        <label>エピソード {{ i }}: </label>
        <input
          type="text"
          v-model="user['episode' + i]"
          placeholder="edit me"
        />
      </div>

      <button class="btn-create-account" type="submit">Create account</button>
    </form>

    <FooterNav />
  </div>
</template>

<script>
import axios from "axios";
import FooterNav from "@/components/modules/FooterNav.vue"
import ProfileCard from "../modules/ProfileCard.vue";

export default {
  components:{
    FooterNav,
    ProfileCard,
  },
  data() {
    return {
      user: {
        img_id: "",
        user_mail: "",
        user_name: "",
        password: "",
        height: 170,
        birth: "",
        blood_type: "",
        hobby: "",
        episode1: "",
        episode2: "",
        episode3: "",
        episode4: "",
        episode5: "",
      },
      file: null,
    };
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0];
    },

    async submitImage() {
      try {
        const formData = new FormData();
        formData.append("file", this.file);

        const response = await axios.post(
          "http://localhost:8000/api/fileupload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          alert("保存完了");
          console.log(response.data.img_id);
          this.user.img_id = response.data.img_id;
          localStorage.setItem("img_id", response.data.img_id);
        }
      } catch (error) {
        console.error(error);
      }
    },

    async submitForm() {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/user/create",
          this.user
        );

        if (response.status === 201) {
          this.$emit("user-created", response.data.user);
          localStorage.setItem("user_mail", response.data.user.user_mail);
          alert("アカウント作成成功");
          console.log(response.data.user);
          this.$router.push("UserLogin");
        }
      } catch (error) {
        console.log(this.user);
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>

.form-control {
  background-color: transparent !important; 
  background-clip: none !important;
  border: none !important;
}

.btn-submit {
  background-color: #E7E7FF;
  color: #6B4EFF;
  border-radius: 50px;
  padding: 10px 20px; /* 適切なサイズを指定してください */
  /* 他のスタイルを適用したい場合はここに追加してください */
}

/* Create Accountボタンのスタイル */
.btn-create-account {
  background-color: #E7E7FF;
  color: #6B4EFF;
  border-radius: 50px;
  padding: 10px 20px; /* 適切なサイズを指定してください */
  /* 他のスタイルを適用したい場合はここに追加してください */
}

</style>