<template>
  <div>
    <div class="life-content" v-for="(life, index) in lifes" :key="life.id">
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
          <img :src="img_pass" alt="人生ゲーム画像" />
          <div>
            <p>{{ life.life_name }}</p>
            <p>{{ life.life_detail }}</p>
          </div>
        </div>
      </div>
      <!-- この部分は後ほど修正 -->
      <div class="profilePageComment">
        <div @click="toggleComentDetail(index)">
          <p>コメント</p>
          <img src="../../assets/image/corner-down-left.svg" alt="詳細" />
        </div>
        <!-- ここをオブジェクトで渡す -->
        <div @click="updatePropValue(life)">
          <!-- オブジェクトの値を更新 -->
          <p>{{ life.heartCount }}</p>
          <img
            class="heart"
            src="../../assets/image/heart-icon.svg"
            alt="詳細"
          />
        </div>
      </div>
      <div v-if="commentDetail[index]">
        <div
          class="comment-are"
          v-for="(comment, cIndex) in life.comments"
          :key="`comment-${cIndex}`"
        >
          <div class="comments">
            <img class="comment-img" :src="comment.img_path" alt="" />
            <div class="comment-info">
              <p>{{ comment.user_email }}</p>
              <p>{{ comment.comment }}</p>
            </div>
          </div>
        </div>
        <div>
          <form
            @submit.prevent="submitComment(life.life_id, index)"
            class="comment"
          >
            <img :src="img_pass" alt="ユーザー画像" class="send-user" />
            <input
              type="text"
              placeholder="コメントを入力してね"
              v-model="comments[index]"
            />
            <input type="submit" />
          </form>
        </div>
      </div>
      <input
        class="update-life"
        type="submit"
        value="人生の更新"
        @click="updateLife(life.life_id)"
      />
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
      toggleSelected: false,
      good: 1000,
      user_name: "ochinpo",
      comments: [],
      life_name: "データが取れていません",
      life_detail: "データが取れていません",
      img_pass: "sample.jpg",
      lifes: [],
      commentDetail: [],
      heartCount: 0,
    };
  },
  components: {
    // NotificationBanner,
  },
  methods: {
    updatePropValue(life) {
      life.heartCount++;

      // 指定秒以内のクリックだとdbに登録しない
      if (life.timerId) {
        clearTimeout(life.timerId);
      }

      life.timerId = setTimeout(async () => {
        try {
          await this.submitGood(life.life_id, life.heartCount);
        } catch (error) {
          console.error("Failed to submit good:", error);
        }
      }, 2000);
    },
    updateLife(life_id) {
      localStorage.setItem("update_life", Number(life_id));
      this.$router.push("/GameModificationUpdate");
    },
    toggleComentDetail(index) {
      this.commentDetail[index] = !this.commentDetail[index];
    },
    async submitComment(lifeId, index) {
      let token = localStorage.getItem("auth_token");
      let life_id = lifeId;
      let user_id = localStorage.getItem("user_id");
      let data = {
        life_id: Number(life_id),
        user_id: Number(user_id),
        comment: this.comments[index],
      };
      if (this.comments[index].length == 0) {
        alert("コメントを入力してください");
        return;
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
          console.log(response.data);
          alert("保存完了");
          this.comments[index] = " ";
        }
      } catch (error) {
        console.error(error);
      }
    },
    async submitGood(lifeId, heartCount) {
      let token = localStorage.getItem("auth_token");
      try {
        const response = await axios.post(
          `http://localhost:8000/api/life/${lifeId}/good`,
          { increment: heartCount },
          {
            headers: {
              Authorization: "Bearer " + token, // Laravelから取得したトークン
            },
          }
        );
        console.log(heartCount);
        if (response.status === 201 || response.status === 200) {
          console.log(response.data.life);
          alert("保存完了");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    let user_id = localStorage.getItem("user_id");
    let user_img = localStorage.getItem("user_img");
    let token = localStorage.getItem("auth_token");
    axios
      .get(`http://localhost:8000/api/user/${user_id}/lifes`, {
        headers: {
          Authorization: "Bearer " + token, // Laravelから取得したトークン
        },
      })
      .then((response) => {
        console.log(response.data.lifes);
        if (response.status === 200) {
          this.lifes = response.data.lifes.map((life) => ({
            ...life,
            toggleSelected: false,
            heartCount: life.good,
            timerId: null,
          }));
          this.comments = new Array(this.lifes.length).fill("");
          this.img_pass = user_img;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  watch: {
    lifes: {
      handler() {
        this.lifes.forEach((life) => {
          if (life.toggleSelected) {
            localStorage.setItem("life_id", life.life_id);
          }
        });
      },
      deep: true,
    },
  },
};
</script>

<!-- 誰かの人生を表示するためのモジュールです -->
<style scoped>
p {
  margin: 0;
  padding: 0;
}
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
  max-height: 80px;
}

.profilePageWrapper div {
  text-align: left;
  padding: 10px 0;
}

.profilePageWrapper div p {
  margin-bottom: 0;
}

.profilePageComment {
  height: 35px;
  background: white;
  width: 100%;
  text-align: left;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  line-height: 35px;
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
.update-life {
  width: 100px;
  height: 30px;
  background: #e7e7ff;
  color: #6b4eff;
  border-radius: 20px;
  margin-top: 5px;
}
.life-content {
  margin-bottom: 20px;
}
.send-user,
.comment-img {
  height: 30px;
  width: 30px;
  border-radius: 10px;
}
.comment {
  padding: 2px;
  display: flex;
  justify-content: space-around;
  background: rgb(218, 218, 218);
}
.comments {
  display: flex;
  padding: 5px 10px;
}
.comments p {
  line-height: 15px;
  font-size: 15px;
}
.comments p:nth-child(2) {
  font-weight: bold;
  text-align: left;
  padding-top: 5px;
}
.comment-are {
  padding-bottom: 10px;
  background: white;
}
.comment-info {
  margin-left: 20px;
}
</style>
