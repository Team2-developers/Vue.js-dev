<template>
  <div class="wrapper">
    <div class="eventTitle">
      <p>No.</p>
      <p>イベント</p>
      <p>ポイント</p>
      <p>内容</p>
    </div>
    <div v-for="(group, index) in formGroups" :key="index" class="eventContent">
      <p class="indexArea">{{ index + 1 }}</p>
      <label class="selectbox-003 selectbox-event">
        <select v-model="group.selectedEvent">
          <option
            v-for="event in events"
            v-bind:value="event.name"
            v-bind:key="event.id"
          >
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
        placeholder="テキストボックスの例"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "LifeEvent",
  data() {
    return {
      formGroups: Array(10)
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
        { id: 4, name: "悲しみ", score: -5 },
        { id: 5, name: "不安", score: -3 },
      ],
      fusenStyles: {
        悲しみ: "sadStyle",
        不安: "anxiousStyle",
        真顔: "neutralStyle",
        微笑み: "smileStyle",
        幸せ: "happyStyle",
      },
    };
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
};
</script>

<!-- 人生の修正表示のcomponent -->
<style scoped>
.indexArea {
  width: 30px;
}
.eventTitle,
.eventContent {
  display: flex;
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
  width: 100px;
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

.fusen-002.sadStyle {
  border-right: 27px solid #1f3134;
}

.fusen-002.anxiousStyle {
  border-right: 27px solid #165e83;
}

.fusen-002.neutralStyle {
  border-right: 27px solid gray;
}

.fusen-002.smileStyle {
  border-right: 27px solid #fcd575;
}

.fusen-002.happyStyle {
  border-right: 27px solid #dd7a56;
}

.fusen-002::before {
  position: absolute;
  bottom: 2px;
  right: -20px;
  z-index: -1;
  transform: rotate(5deg);
  width: 100px;
  height: 50%;
  background-color: #d0d0d0;
  content: "";
  filter: blur(4px);
}
</style>
