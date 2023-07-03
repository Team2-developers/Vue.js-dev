<template>
  <div>
    <form @submit.prevent="submitImage">
      <div>
        <label>File: </label>
        <input type="file" @change="onFileChange" />
      </div>
      <button type="submit">Submit</button>
    </form>

    <form @submit.prevent="submitForm">
      <div>
        <label>Email: </label>
        <input type="email" v-model="user.user_mail" required />
      </div>
      <div>
        <label>Name: </label>
        <input type="text" v-model="user.user_name" required />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" v-model="user.password" required />
      </div>
      <div>
        <label>Birth: </label>
        <input type="date" v-model="user.birth" />
      </div>
      <div>
        <label>Blood Type: </label>
        <input type="text" v-model="user.blood_type" />
      </div>
      <div>
        <label>hobby </label>
        <input type="text" v-model="user.hobby" />
      </div>
      <div v-for="i in 5" :key="i">
        <label>Episode {{ i }}: </label>
        <input type="text" v-model="user['episode' + i]" />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        img_id: "",
        user_mail: "",
        user_name: "",
        password: "",
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
      try {
        const response = await axios.post(
          "http://localhost:8000/api/user/create",
          this.user
        );

        if (response.status === 201) {
          this.$emit("user-created", response.data.user);
          localStorage.setItem("user_mail", response.data.user.user_mail);
          alert("アカウント作成成功");
          this.$router.push("/UserLogin");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
