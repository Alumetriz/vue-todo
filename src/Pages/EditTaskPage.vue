<template>
  <div class='modal-overlay' v-if="editDetailIsOpen" @click="closeModal($store.state)"></div>

  <div class="task-options">
    <div class="form">
      <button
          :class="{'radio': true, 'done-task': true}"
          @click="completeTask"
      ></button>
      <div class="task-text">
        <label>
          <input
              type="text"
              :class="{'task-text__title': true}"
              placeholder="input task title"
              :value="title"
              @input="updateTitle"
          ></label>
        <label>
            <textarea
                placeholder="input task description"
                :class="{'task-text__descr': true}"
                :value="descr"
                @input="updateDescr"
            ></textarea>
        </label>
      </div>
    </div>

    <div class="task-details">
      <div
          class="task-detail detail-deadline"
          @click="handleDetail"
      >
        <div class="task-detail__icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
               stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M12 6V12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"></path>
              <path d="M16.24 16.24L12 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"></path>
            </g>
          </svg>

          <h5 class="task-detail__title">task time:</h5>
        </div>
        <div class="detail-btn deadline-detail"> {{ getDate }}</div>
      </div>

      <div
          class="task-detail detail-category"
          @click="handleDetail"
      >
        <div class="task-detail__icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                  d="M7.0498 7.0498H7.0598M10.5118 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10.5118C3 11.2455 3 11.6124 3.08289 11.9577C3.15638 12.2638 3.27759 12.5564 3.44208 12.8249C3.6276 13.1276 3.88703 13.387 4.40589 13.9059L9.10589 18.6059C10.2939 19.7939 10.888 20.388 11.5729 20.6105C12.1755 20.8063 12.8245 20.8063 13.4271 20.6105C14.112 20.388 14.7061 19.7939 15.8941 18.6059L18.6059 15.8941C19.7939 14.7061 20.388 14.112 20.6105 13.4271C20.8063 12.8245 20.8063 12.1755 20.6105 11.5729C20.388 10.888 19.7939 10.2939 18.6059 9.10589L13.9059 4.40589C13.387 3.88703 13.1276 3.6276 12.8249 3.44208C12.5564 3.27759 12.2638 3.15638 11.9577 3.08289C11.6124 3 11.2455 3 10.5118 3ZM7.5498 7.0498C7.5498 7.32595 7.32595 7.5498 7.0498 7.5498C6.77366 7.5498 6.5498 7.32595 6.5498 7.0498C6.5498 6.77366 6.77366 6.5498 7.0498 6.5498C7.32595 6.5498 7.5498 6.77366 7.5498 7.0498Z"
                  stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>

          <h5 class="task-detail__title">task category:</h5>
        </div>
        <div
            class="detail category-detail"
            :style="{backgroundColor: category.bgColor}"
        >
          <div v-html="category.svgImage"></div>
          <span class=" detail-btn choosed-category-title">{{ category.title }}</span>
        </div>
      </div>

      <div
          class="task-detail detail-priority"
          @click="handleDetail"
      >
        <div class="task-detail__icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5 1C4.44772 1 4 1.44772 4 2V22C4 22.5523 4.44772 23 5 23C5.55228 23 6 22.5523 6 22V14H19C19.3603 14 19.6927 13.8062 19.8702 13.4927C20.0477 13.1792 20.0429 12.7944 19.8575 12.4855L17.1662 8L19.8575 3.5145C20.0429 3.20556 20.0477 2.82081 19.8702 2.5073C19.6927 2.19379 19.3603 2 19 2L6 2C6 1.44772 5.55228 1 5 1ZM6 4V12H17.2338L15.1425 8.5145C14.9525 8.19781 14.9525 7.80219 15.1425 7.4855L17.2338 4H6Z"
                    fill="#ffffff"></path>
            </g>
          </svg>

          <h5 class="task-detail__title">task priority:</h5>
        </div>
        <div class="priority-detail">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(232, 232, 232);">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5 1C4.44772 1 4 1.44772 4 2V22C4 22.5523 4.44772 23 5 23C5.55228 23 6 22.5523 6 22V14H19C19.3603 14 19.6927 13.8062 19.8702 13.4927C20.0477 13.1792 20.0429 12.7944 19.8575 12.4855L17.1662 8L19.8575 3.5145C20.0429 3.20556 20.0477 2.82081 19.8702 2.5073C19.6927 2.19379 19.3603 2 19 2L6 2C6 1.44772 5.55228 1 5 1ZM6 4V12H17.2338L15.1425 8.5145C14.9525 8.19781 14.9525 7.80219 15.1425 7.4855L17.2338 4H6Z"></path>
            </g>
          </svg>
          <span class="detail-btn priority-value">{{ priority }}</span>
        </div>
      </div>

      <div class="btns">
        <button class="delete-task__btn">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                  d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
                  stroke="#FF4949" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
          <span>delete task</span>
        </button>
        <button class="save-changes__btn">save changes</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  methods: {
    ...mapMutations('taskData/EditTask', [
      'changeTitle',
    ]),
    updateTitle(e) {
      this.$store.commit('taskData/EditTask/changeTitle', e.target.value)
    },
    updateDescr(e) {
      this.$store.commit('taskData/EditTask/changeDescription', e.target.value)
    },
    handleDetail(event) {
      const detail = event.target.closest('.task-detail').classList[1]
      this.$store.commit('taskData/EditTask/openDetailEdit', detail);
    },

  },
  computed: {
    ...mapState({
      title: state => state.taskData.EditTask.selectedTask?.title,
      descr: state => state.taskData.EditTask.selectedTask?.descr,
      deadline: state => state.taskData.EditTask.selectedTask?.deadline,
      category: state => state.taskData.EditTask.selectedTask?.category,
      priority: state => state.taskData.EditTask.selectedTask?.priority,
      editDetailIsOpen: state => state.taskData.EditTask.editDetailIsOpen,
    }),
    getDate() {
      const date = this.deadline.date;
      const hours = this.deadline.hours;
      const minutes = this.deadline.minutes;

      return '' + date.format("MMM DD") + ' ' +
          (hours < 10 ? '0' + hours : hours) + ':' +
          (minutes < 10 ? '0' + minutes : minutes);
    }
  }
}
</script>

<style scoped>
.task-options {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 55px;

  padding: 120px 0;
}

.form {
  display: flex;
  align-items: center;
  gap: 45px;
}

.radio {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  background-color: #363636;
  cursor: pointer;
  padding: 5px;
}

.radio.active {
  background-color: green;
}

.task-text {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.task-text h3,
.task-text p {
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
}

.task-text h3 {
  font-size: 26px;
}

.task-text p {
  font-size: 17px;
  color: #AFAFAF;
}

.task-details {
  display: flex;
  flex-direction: column;
  gap: 40px;

  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

.task-detail {
  display: flex;
  justify-content: space-between;
}

.task-detail__icon {
  display: flex;
  align-items: center;
  gap: 15px;
}

.task-detail__icon svg {
  width: 35px;
  height: 35px;
}

.task-detail__title {
  font-size: 21px;
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  text-transform: capitalize;
}

.delete-task__btn {
  cursor: pointer;
  background: none;
  border: none;

  display: flex;
  align-items: center;
  gap: 15px;
}

.delete-task__btn svg {
  width: 35px;
  height: 35px;
}

.delete-task__btn span {
  color: #FF4949;
  font-size: 21px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  text-transform: capitalize;
  white-space: nowrap;
}

.deadline-detail,
.priority-detail {
  background-color: #595959;
  padding: 15px;
  border-radius: 8px;

  color: #FFFFFF;
  font-size: 17px;
  font-family: 'Open Sans', sans-serif;
  text-transform: capitalize;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  cursor: pointer;
}

.priority-detail svg {
  fill: #FFFFFF;
  width: 30px;
  height: 30px;
}

.btns {
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
}

.save-changes__btn {
  background-color: #8687E7;
  border: none;
  border-radius: 8px;
  padding: 15px;

  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 21px;
  color: #FFFFFF;
  text-transform: capitalize;

  cursor: pointer;
}

.task-text__title,
.task-text__descr {
  background-color: #151515;
  padding: 5px;
  border: none;
  border-radius: 5px;
  width: 400px;

  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-size: 26px;
  resize: vertical;
}

.done-task.active {
  background-color: green;
}

.task-text__title.complete,
.task-text__descr.complete {
  text-decoration: line-through;
  color: #595959;
}

.choosed-category-title {
  text-align: center;
  font-size: 19px;
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  z-index: 2;
}

.category-detail {
  position: relative;
  background-color: #809CFF;
  border-radius: 5px;
  color: white;

  padding: 10px;
}

.category-detail:after {
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

.category-detail {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 15px;
}

.priority-value {
  font-size: 30px;
  font-weight: 500;
}
</style>