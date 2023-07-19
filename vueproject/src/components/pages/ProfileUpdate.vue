<template>
  <div class="background-wrapper wrapper container">
    <div class="navbar">
      <div class="container-fluid">
        <RouterLink :to="'../ProfilePage'">
          <img
            src="@/assets/image/transition-icon.svg"
            alt=""
            width="30"
            height="20"
            class="d-inline-block align-text-top"
          />
        </RouterLink>
        <div class="col align-self-center" style="font-size: 1.6rem;">
          My Details
        </div>
      </div>
    </div>

    <form @submit.prevent="submitImage" class="formItem">
      <div>
        <img :src="img_path" alt="ユーザー画像" class="userInfoImage" />
        <label form="formFileSm" class="formlabel">
          <input type="file" @change="onFileChange" class="form-control"/>
        </label>
      </div>
      <button class="btn-submit btn py-1 m-2" type="submit">
        変更する
      </button>
    </form>

    <form @submit.prevent="submitForm">

      <div class="row shadow-sm">
        <label class="col-5 mb-1 py-3 d-flex align-items-center">
          メールアドレス 
        </label>
        <input
          type="email"
          v-model="user.user_mail"
          required
          placeholder="example@example.com"
          class="form-control col-7 mt-2"
        />
      </div>

      <div class="row shadow-sm">
        <label class="col-5 mb-1 py-3 d-flex align">
          ユーザー名
        </label>
        <input
          type="text"
          v-model="user.user_name"
          required
          placeholder="your name"
          class="font-control col-7 mt-2"
        />
      </div>
      <div>
        <label class="col-5 mb-1 py-3 d-flex align">
          パスワード
        </label>
        <input
          type="password"
          v-model="user.password"
          required
          placeholder="password"
          class="form-control col-7 mt-2"
        />
      </div>
      
      <div class="row shadow-sm">
        <label>
          Height: 
        </label>
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
        img_id: "",
        life_id: "",
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
          alert("保存完了");
          this.user.img_id = response.data.img_id;
        }
      } catch (error) {
        console.error(error);
      }
    },

    async submitForm() {
      let token = localStorage.getItem("auth_token");
      try {
        const response = await axios.post(
          `http://localhost:8000/api/user/update`,
          this.user,
          {
            headers: {
              Authorization: "Bearer " + token, // Laravelから取得したトークン
            },
          }
        );

        if (response.status === 200) {
          this.$emit("user-created", response.data.user);
          localStorage.setItem("user_mail", response.data.user.user_mail);
          alert("プロフィールの更新成功");
          console.log(response.data.user);
          this.$router.push("/ProfilePage");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    let token = localStorage.getItem("auth_token");
    let life_id = localStorage.getItem("life_id");
    axios
      .get("http://localhost:8000/api/user", {
        headers: {
          Authorization: "Bearer " + token, // Laravelから取得したトークン
        },
      })
      .then((response) => {
        (this.user = response.data.user), (this.file = response.data.img_path);
        this.img_path = response.data.img_path;
        this.user.life_id = life_id;
        // life_id
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
.userInfoImage {
  display: block;
  text-align: center;
  margin: 0 auto;
}

.form-control {
  background-color: transparent !important; 
  background-clip: unset !important;
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
