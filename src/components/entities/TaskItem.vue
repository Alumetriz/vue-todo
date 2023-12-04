<template>
  <div
      class="task"
  >
    <router-link to="/EditTask" class="options-task__btn">
      <svg @click="selectTask(task)" xmlns="http://www.w3.org/2000/svg" height="1em"
           viewBox="0 0 448 512">
        <path
            d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"></path>
      </svg>
    </router-link>

    <div class="task__main-info">
      <h2 :class="{'task-title': true, 'completed': task.isCompleted}">{{ task.title }}</h2>
      <p class="task-deadline">{{ getDate }}</p>
    </div>

    <div class="task__part-info">
      <div
          class="category"
          :style="{backgroundColor: task.category.bgColor}"
      >
        <div class="task-category-image" v-html="task.category.svgImage"></div>
        <span class="choosed-category-title">{{ task.category.title }}</span>
      </div>
      <div class="priority">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             style="fill: rgb(232, 232, 232);">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5 1C4.44772 1 4 1.44772 4 2V22C4 22.5523 4.44772 23 5 23C5.55228 23 6 22.5523 6 22V14H19C19.3603 14 19.6927 13.8062 19.8702 13.4927C20.0477 13.1792 20.0429 12.7944 19.8575 12.4855L17.1662 8L19.8575 3.5145C20.0429 3.20556 20.0477 2.82081 19.8702 2.5073C19.6927 2.19379 19.3603 2 19 2L6 2C6 1.44772 5.55228 1 5 1ZM6 4V12H17.2338L15.1425 8.5145C14.9525 8.19781 14.9525 7.80219 15.1425 7.4855L17.2338 4H6Z"></path>
          </g>
        </svg>
        <span class="priority-value">{{ task.priority }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";

export default {
  props: {
    task: {
      type: Object,
      required: true,
    }
  },
  methods: {
    ...mapMutations('taskData/EditTask', [
      'selectTask',
    ])
  },
  computed: {
    getDate() {
      const date = this.task.deadline.date;
      const hours = this.task.deadline.hours;
      const minutes = this.task.deadline.minutes;

      return '' + date.format("MMM DD") + ' ' +
          (hours < 10 ? '0' + hours : hours) + ':' +
          (minutes < 10 ? '0' + minutes : minutes);
    }
  }
}
</script>

<style scoped>
.task {
  background-color: #363636;
  position: relative;
  padding: 25px;
  display: flex;
  gap: 25px;
  border-radius: 5px;
}

.options-task__btn {
  background: none;
  border: none;
  cursor: pointer;

  fill: #FFFFFF;
  font-size: 40px;

  margin: auto 0;
}

.task-title {
  color: #FFFFFF;
  font-size: 35px;
  font-weight: 500;
}

.task-title.completed {
  text-decoration: line-through;
  color: #595959;
}

.task-deadline {
  color: #AFAFAF;
  font-size: 21px;
  font-weight: 500;
}

.task__main-info {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.task__part-info {
  display: flex;
  gap: 15px;

  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 15px 15px 0;
}

.category-title {
  font-size: 17px;
  font-weight: 400;
}

.choosed-category-title {
  text-align: center;
  font-size: 19px;
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  z-index: 2;
}

.priority-value {
  font-size: 30px;
  font-weight: 500;
}

.category {
  position: relative;
  background-color: #809CFF;
  border-radius: 5px;
  color: white;

  padding: 10px;
}

.category:after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  z-index: 1;
}

.priority,
.category {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 15px;
}

.priority {
  border: 1px solid #8687E7;
  border-radius: 5px;
  color: #E8E8E8;

  padding: 10px;
  gap: 5px;
}

.priority svg {
  fill: #E8E8E8;
}

.priority svg {
  width: 30px;
  height: 30px;
}

.priority svg {
  fill: #E8E8E8;
}
</style>