<template>
  <div class="wrapper">
    <div class="eventTitle">
      <p>No.</p>
      <p>イベント</p>
      <p>ポイント</p>
      <p>内容</p>
    </div>
    <div v-for="(group, index) in formGroups" :key="index" class="eventContent">
    <p class="indexArea">{{index+1}}</p>
      <label class="selectbox-003 selectbox-event">
        <select v-model="group.selectedEvent">
          <option disabled value="">イベント</option>
          <option
            v-for="event in events"
            v-bind:value="event.name"
            v-bind:key="event.id"
          >
            {{ event.name }}
          </option>
        </select>
      </label>

      <label class="selectbox-003 selectbox-point">
        <select v-model="group.selectedPoints">
          <option disabled value="">ポイント</option>
          <option
            v-for="point in points"
            v-bind:value="point.score"
            v-bind:key="point.id"
          >
            {{ point.score }}
          </option>
        </select>
      </label>

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
      selectedEvent: "red",
      selectedPoints: "",
      formGroups: Array(10)
        .fill()
        .map(() => ({
          selectedEvent: "",
          selectedPoints: "",
          textbox: "",
        })),
      // eventごとに規定のポイントを設定しておく
      events: [
        { id: 1, name: "red" },
        { id: 2, name: "yellow" },
        { id: 3, name: "green" },
        { id: 4, name: "blue" },
        { id: 5, name: "black" },
      ],
      points: [
        { id: 1, score: -5 },
        { id: 2, score: -3 },
        { id: 3, score: 0 },
        { id: 4, score: 3 },
        { id: 5, score: 5 },
      ],
    };
  },
  props: {},
};
</script>

<!-- 人生の修正表示のcomponent -->
<style scoped>
.indexArea{
    width: 30px;
}
.eventTitle,.eventContent {
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
.selectbox-point select {
  padding: 0.4em calc(0.8em + 20px) 0.4em 0.8em;
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
</style>
