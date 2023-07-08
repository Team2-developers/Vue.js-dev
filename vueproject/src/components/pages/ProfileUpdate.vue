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
      </div>
      <div class="fs-4 d-flex justify-content-center">My Details</div>
    </div>

    <form @submit.prevent="submitImage" class="formItem">
      <div>
        <img :src="img_path" alt="ユーザー画像" class="userInfoImage" />
        <label>File: </label>
        <input type="file" @change="onFileChange" />
      </div>
      <button type="submit">Submit</button>
    </form>

    <form @submit.prevent="submitForm" class="formItem">
      <div>
        <label>Email: </label>
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
        <label>Height: </label>
        <input type="number" v-model="user.height" placeholder="edit me" />
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

      <input type="submit" class="" value="更新" />
    </form>

    <FooterNav />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        user_id: "",
        img_id: "",
        user_mail: "",
        user_name: "",
        password: "",
        height: "",
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
          console.log(this.file)
          alert("保存完了");
          this.user.img_id = response.data.img_id;
        }
      } catch (error) {
        console.error(error);
      }
    },

    async submitForm() {
      try {
        const response = await axios.post(
          `http://localhost:8000/api/user/update/${this.user.user_id}`,
          this.user
        );

        if (response.status === 200) {
          this.$emit("user-created", response.data.user);
          localStorage.setItem("user_mail", response.data.user.user_mail);
          alert("プロフィールの更新成功");
          this.$router.push("/ProfilePage");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    let token = localStorage.getItem("auth_token");
    axios
      .get("http://localhost:8000/api/user", {
        headers: {
          Authorization: "Bearer " + token, // Laravelから取得したトークン
        },
      })
      .then((response) => {
        this.user = response.data.user,
        this.file = response.data.img_path
        this.img_path = response.data.img_path
        // console.log(response.data.img_path);
        // ユーザー情報を保存
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
.userInfoImage{
  display: block;
  text-align: center;
  margin: 0 auto;
}
</style>