<template>
  <div>
    <div v-for="(life, index) in lifes" :key="life.id">
      <div class="profilePage">
        <!-- トグルボタン -->
        <div class="toggle_button">
          <input
            id="toggle"
            class="toggle_input"
            type="checkbox"
            v-model="life.toggleSelected"
          />
          <label for="toggle" class="toggle_label" />
        </div>
        <div class="profilePageWrapper">
          <img :src="getImagePath" alt="人生ゲーム画像" />
          <div>
            <p>{{ life.life_name }}</p>
            <p>{{ life.life_detail }}</p>
          </div>
        </div>
      </div>
      <div class="profilePageComment" @click="toggleComentDetail(index)">
        <div>
          <p>コメント</p>
          <img src="../../assets/image/corner-down-left.svg" alt="詳細" />
        </div>
        <div @click="updatePropValue">
          <p>{{ life.good }}</p>
          <img
            class="heart"
            src="../../assets/image/heart-icon.svg"
            alt="詳細"
          />
        </div>
      </div>
      <div v-if="commentDetail[index]">
        <div>
          <!-- この送り先違うかも -->
          <form @submit.prevent="submitComment(life.life_id)">
            <img :src="img_pass" alt="ユーザー画像" />
            <input type="text" v-model="comments[index]" />
            <input type="submit" />
          </form>
        </div>
      </div>
      <input type="submit" value="人生の更新"  @click="updateLife(life.life_id)" />
    </div>
  </div>
</template>

<script>
// import NotificationBanner from "@/components/modules/NotificationBanner";
import axios from "axios";

export default {
  name: "SomeoneLifeList",
  data() {
    return {
      toggleSelected: true,
      good: 1000,
      user_name: "ochinpo",
      comments: [],
      life_name: "データが取れていません",
      life_detail: "データが取れていません",
      img_pass: "sample.jpg",
      lifes: [],
      commentDetail: [],
    };
  },
  components: {
    // NotificationBanner,
  },
  methods: {
    updatePropValue() {
      this.heartCount = this.heartCount + 1;
    },
    updateLife(life_id){
      // indexは0スタートなので+1追加
      localStorage.setItem('update_life',Number(life_id)+1)
      this.$router.push('/GameModificationUpdate');
    },
    toggleComentDetail(index) {
      this.commentDetail[index] = !this.commentDetail[index];
    },
    async submitComment(index) {
      let token = localStorage.getItem("auth_token");
      let life_id = localStorage.getItem("life_id");
      let user_id = localStorage.getItem("user_id");
      let data = {
        life_id: Number(life_id),
        user_id: Number(user_id),
        comment: this.comments[index],
      };
      if(this.comments[index].length == 0){
        alert("コメントを入力してください")
        return
      }

      try {
        const response = await axios.post(
          "http://localhost:8000/api/comments/create",
          data,
          {
            headers: {
              Authorization: "Bearer " + token, // Laravelから取得したトークン
            },
          }
        );
        if (response.status === 201) {
          alert("保存完了");
          this.comments[index] = " "
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    getImagePath() {
      return require("@/assets/image/" + this.img_pass);
    },
  },
  mounted() {
    let life_id = localStorage.getItem("life_id");
    let user_id = localStorage.getItem("user_id");
    let token = localStorage.getItem("auth_token");
    // axios
    //   .get(`http://localhost:8000/api/life/${life_id}`, {
    //     headers: {
    //       Authorization: "Bearer " + token, // Laravelから取得したトークン
    //     },
    //   })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       this.life_name = response.data.life.life_name
    //       this.life_detail = response.data.life.life_detail
    //       this.good = response.data.life.good
    //       console.log(response.data.life.good)
    //       // alert("保存完了");
    //     }
    //     // ユーザー情報を保存
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   }),
    axios
      .get(`http://localhost:8000/api/user/${user_id}/lifes`, {
        headers: {
          Authorization: "Bearer " + token, // Laravelから取得したトークン
        },
      })
      .then((response) => {
        if (response.status === 200) {
          this.lifes = response.data.lifes.map((life) => ({
            ...life,
            toggleSelected: false,
          }));

          this.comments = new Array(this.lifes.length).fill("");
          console.log(response.data)
          // alert("保存完了");
        }
        // ユーザー情報を保存
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<!-- 誰かの人生を表示するためのモジュールです -->
<style scoped>
/* モジュール全体に付与するcss */
.profilePage {
  width: 100%;
  background: #d9d9d9;
  height: 125px;
  padding: 10px;
  position: relative;
}

.profilePageWrapper {
  display: flex;
}

.profilePageWrapper img {
  margin-left: 15px;
  margin-right: 50px;
  max-width: 80px;
}

.profilePageWrapper div {
  text-align: left;
  padding: 10px 0;
}

.profilePageWrapper div p {
  margin-bottom: 0;
}

.profilePageComment {
  height: 30px;
  background: white;
  width: 100%;
  text-align: left;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
}

.profilePageComment div {
  display: flex;
  vertical-align: middle;
}

.profilePageComment div p {
  margin-right: 10px;
}

.profilePageComment img {
  height: 80%;
}

/* コメント詳細の表示 */
.hidden {
  display: none;
}

.commentDetail {
  display: none;
}
</style>
