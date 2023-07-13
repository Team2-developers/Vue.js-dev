<template>
  <div class="background-wrapper wrapper">
    <form @submit.prevent="submitTroutUpdate">
      <div>
        <input
          class="user_name rounded bg-light text-dark py-1 mb-2 rounded"
          type="text"
          placeholder="人生名"
          style="width: 300px"
          v-model="life_name"
        />
        <input
          class="user_name rounded bg-light text-dark py-1 mb-2 rounded"
          type="text"
          placeholder="人生の詳細"
          style="width: 300px"
          v-model="life_detail"
        />
        <input
          class="user_name rounded bg-light text-dark py-1 mb-2 rounded"
          type="text"
          placeholder="最後のメッセージ"
          style="width: 300px"
          v-model="message"
        />
      </div>
      <input type="submit" value="送信" />
    </form>
    <div>
      <div class="eventTitle">
        <p class="event-index">No.</p>
        <p class="event-name">イベント</p>
        <p class="event-score">ポイント</p>
        <p class="event-detail">内容</p>
      </div>
      <div
        v-for="(group, index) in formGroups"
        :key="index"
        class="eventContent"
      >
        <p class="indexArea">{{ index + 1 }}</p>
        <label class="selectbox-003 selectbox-event">
          <select v-model="group.selectedEvent">
            <option v-for="event in events" :value="event.name" :key="event.id">
              {{ event.name }}
            </option>
          </select>
        </label>

        <div :class="['fusen-002', fusenStyles[group.selectedEvent]]">
          <input disabled type="number" v-model="group.selectedPoints" />
        </div>

        <input
          type="text"
          v-model="group.textbox"
          class="textbox-003"
          placeholder="人生のイベント"
        />
      </div>
      <div class="saveArea">
        <input
          class="backButton"
          type="button"
          value="戻る"
          @click="profilePage"
        />
        <input class="saveButton" type="submit" value="更新" />
      </div>
    </div>
    <FooterNav />
  </div>
</template>

<script>
import axios from "axios";
import FooterNav from "../modules/FooterNav.vue";

export default {
  name: "GameModificationUpdate",
  data() {
    return {
      life_name: "",
      life_detail: "",
      message: "",
      formGroups: Array(20)
        .fill()
        .map(() => ({
          selectedEvent: "真顔",
          selectedPoints: "0",
          textbox: "",
        })),
      events: [
        { id: 1, name: "幸せ", score: 5 },
        { id: 2, name: "微笑み", score: 3 },
        { id: 3, name: "真顔", score: 0 },
        { id: 4, name: "不安", score: -3 },
        { id: 5, name: "悲しみ", score: -5 },
      ],
      fusenStyles: {
        悲しみ: "black",
        不安: "blue",
        真顔: "gray",
        微笑み: "yellow",
        幸せ: "red",
      },
    };
  },
  methods: {
    // 人生の更新
    async submitTroutUpdate() {
      let token = localStorage.getItem("auth_token");
      let user_id = localStorage.getItem("user_id");

      // タイトル情報
      let life = {
        life_name: this.life_name,
        life_detail: this.life_detail,
        message: this.message,
        user_id: Number(user_id),
      };

      // 人生のイベント情報
      let trouts = this.formGroups.map((group, index) => {
        return {
          trout_detail: group.textbox,
          seqno: index + 1,
          point: parseInt(group.selectedPoints),
          color: this.fusenStyles[group.selectedEvent],
        };
      });

      console.log({ life, trouts });

      try {
        const response = await axios.post(
          "http://localhost:8000/api/updateLifeAndTrout",
          {
            life,
            trouts,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        if (response.status === 200 || response.status === 201) {
          alert("更新しました");
          this.$router.push("/ProfilePage");
        }
      } catch (error) {
        console.error(error);
      }
    },
    profilePage() {
      this.$router.push("/ProfilePage");
    },
  },
  watch: {
    formGroups: {
      handler(newValue) {
        newValue.forEach((group) => {
          const event = this.events.find((e) => e.name === group.selectedEvent);
          if (event) {
            group.selectedPoints = event.score;
          }
        });
      },
      deep: true,
    },
  },
  mounted() {
    let life_id = localStorage.getItem("update_life");
    let token = localStorage.getItem("auth_token");

    axios
      .get(`http://localhost:8000/api/life/${life_id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          this.life_name = response.data.life.life_name;
          this.life_detail = response.data.life.life_detail;
          this.message = response.data.life.message;
          // 人生の各イベント情報の取得と設定
          const trouts = response.data.torut;
          for (let i = 0; i < trouts.length; i++) {
            const trout = trouts[i];
            this.formGroups[i].textbox = trout.trout_detail;
            this.formGroups[i].selectedPoints = trout.point;
            this.formGroups[i].selectedEvent = this.events.find(
              (event) => event.score === trout.point
            ).name;
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    FooterNav,
  },
};
</script>

<!-- 人生の修正表示のcomponent -->
<style scoped>
/* 保存ボタンデザイン */
.saveArea {
  margin-top: 20px;
}
.backButton {
  width: 50px;
  height: 40px;
  background: #d9d9d9;
  color: white;
}
.saveButton {
  width: 120px;
  height: 40px;
  color: white;
  background: #31ac87;
  margin-left: 30px;
}
label {
  margin: 0;
}
.indexArea {
  width: 30px;
  line-height: 55px;
  padding: 0;
  margin: 0;
}
.eventTitle,
.eventContent {
  display: flex;
  justify-content: space-evenly;
}
.event-index {
  width: 20px;
}
.event-name {
  width: 120px;
}
.event-score {
  width: 95px;
}
.event-detail {
  width: 160px;
}
.selectbox-003 {
  display: inline-flex;
  align-items: center;
  position: relative;
}

.selectbox-003::after {
  position: absolute;
  right: 15px;
  width: 10px;
  height: 7px;
  background-color: #535353;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  content: "";
  pointer-events: none;
}

.selectbox-003 select {
  appearance: none;
  border: 1px solid #b8c9ff;
  border-radius: 3px;
  background-color: #fff;
  color: #333333;
  font-size: 1em;
  cursor: pointer;
}

.selectbox-event select {
  padding: 0.4em calc(0.8em + 20px) 0.4em 0.8em;
}
.fusen-002 input {
  width: 50px;
}
/* textbox */
.textbox-003 {
  width: 160px;
  padding: 6px 10px;
  border: none;
  border-radius: 3px;
  background: #eff1f5;
  color: #333;
  font-size: 10px;
  line-height: 2.8em;
  margin: 10px 5px;
}

.textbox-003::placeholder {
  color: #999;
}

/* 付箋デザイン */
.fusen-002 {
  display: inline-block;
  position: relative;
  padding: 0.5em;
  background-color: #f5f5f5;
  color: #333333;
  margin: 10px;
}

.fusen-002.black {
  border-right: 27px solid #1f3134;
}

.fusen-002.blue {
  border-right: 27px solid #165e83;
}

.fusen-002.gray {
  border-right: 27px solid gray;
}

.fusen-002.yellow {
  border-right: 27px solid #fcd575;
}

.fusen-002.red {
  border-right: 27px solid #dd7a56;
}

.fusen-002::before {
  position: absolute;
  bottom: 2px;
  right: -27px;
  z-index: -1;
  transform: rotate(5deg);
  width: 100px;
  height: 50%;
  background-color: #d0d0d0;
  content: "";
  filter: blur(4px);
}
</style>
