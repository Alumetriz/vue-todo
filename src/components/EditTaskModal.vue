<template>
  <div
      class="task-screen active"
      v-if="editModalIsShow"
  >
    <div class="task-screen__wrapper">
      <div class="nav-btns">
        <button
            class="close"
            @click="closeModal"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                  d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                  fill="#FFFFFF"></path>
            </g>
          </svg>
        </button>
        <button class="repeat">
          <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                  d="M4 8.91992V14.4199C4 16.0112 4.63211 17.5374 5.75732 18.6626C6.88254 19.7878 8.4087 20.4199 10 20.4199H20.25"
                  stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M1 11.9199L4 8.91992L7 11.9199" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"></path>
              <path
                  d="M20 15.9199V10.4199C20 8.82862 19.3678 7.30246 18.2426 6.17725C17.1174 5.05203 15.5913 4.41992 14 4.41992H3.75"
                  stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M23 12.9199L20 15.9199L17 12.9199" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"></path>
            </g>
          </svg>
        </button>
      </div>

      <div class="task-options">
        <button class="radio done-task"></button>
        <div class="task-text">
          <label>
            <input
                type="text"
                class="task-text__title"
                placeholder="input task title"
                :value="selectedTask.title"
                @input="updateInput($event.target.value)"
            ></label>
          <label>
            <textarea
                placeholder="input task description"
                class="task-text__descr"
                :value="selectedTask.description"
                @input="updateTextArea($event.target.value)"
            ></textarea>
          </label>
        </div>

      </div>

      <div class="task-details">
        <ul class="task-details__list">
          <li class="task-details__list-item">
            <div class="task-detail__icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
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
            <div class="detail deadline-detail">{{ selectedTask.deadline }}</div>
          </li>

          <li class="task-details__list-item">
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
                :style="{backgroundColor: selectedTask.category.bgColor}"
            >
              <div
                  v-html="selectedTask.category.svgImage"
              ></div>
              <span class="choosed-category-title">{{ selectedTask.category.title }}</span>
            </div>
          </li>

          <li class="task-details__list-item">
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
            <div class="detail priority-detail">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(232, 232, 232);">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5 1C4.44772 1 4 1.44772 4 2V22C4 22.5523 4.44772 23 5 23C5.55228 23 6 22.5523 6 22V14H19C19.3603 14 19.6927 13.8062 19.8702 13.4927C20.0477 13.1792 20.0429 12.7944 19.8575 12.4855L17.1662 8L19.8575 3.5145C20.0429 3.20556 20.0477 2.82081 19.8702 2.5073C19.6927 2.19379 19.3603 2 19 2L6 2C6 1.44772 5.55228 1 5 1ZM6 4V12H17.2338L15.1425 8.5145C14.9525 8.19781 14.9525 7.80219 15.1425 7.4855L17.2338 4H6Z"></path>
                </g>
              </svg>
              <span class="priority-value">{{ selectedTask.priority }}</span>
            </div>
          </li>

          <li class="task-details__list-item delete-task">
            <div class="task-detail__icon delete-task">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                      d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
                      stroke="#FF4949" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
              </svg>
              <h5 class="task-detail__title delete-task">delete task</h5>
            </div>
          </li>
        </ul>
      </div>

      <button class="save-changes__btn" @click="saveChanges">save changes</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: '',
    },
    textAreaValue: {
      type: String,
      default: '',
    },
    selectedTask: Object,
    editModalIsShow: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      newTitle: '',
      newDescription: '',
    }
  },
  methods: {
    updateInput(value) {
      console.log(value)
      this.$emit('update:modelValue', value);
    },
    updateTextArea(value) {
      this.$emit('update:textAreaValue', value)
    },
    closeModal() {
      this.$emit('close-edit-modal');
    },
    saveChanges() {
      this.$emit('save-changes');
    }
  }
}
</script>

<style scoped>
.task-screen {
  display: none;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-color: #151515;
  z-index: 999;
  padding: 40px 20px;
  overflow: auto;
}

.task-screen.active {
  display: flex;
  overflow: hidden;
}

.task-screen__wrapper {
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 80px;
  overflow: auto;
}

.nav-btns {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.nav-btns .close,
.nav-btns .repeat {
  padding: 5px;
  font-size: 19px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #1D1D1D;
  border: none;
  border-radius: 8px;

  cursor: pointer;
}

.nav-btns .close svg,
.nav-btns .repeat svg {
  width: 35px;
  height: 35px;
}

.task-options {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 55px;
}

.edit {
  background: none;
  border: none;
  cursor: pointer;
}

.edit svg {
  width: 35px;
  height: 35px;
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

.task-details__list {
  display: flex;
  flex-direction: column;
  gap: 40px;

  max-width: 600px;
  margin: 0 auto;
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

.task-details__list-item {
  display: flex;
  justify-content: space-between;
}

.task-detail__title {
  font-size: 21px;
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  text-transform: capitalize;
}

.task-detail__title.delete-task {
  color: #FF4949;
}

.task-detail__icon.delete-task {
  cursor: pointer;
}

.detail {
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

.detail svg {
  width: 30px;
  height: 30px;
}

.save-changes__btn {
  background-color: #8687E7;
  border: none;
  border-radius: 8px;
  padding: 15px;
  width: 50%;
  margin: 0 auto;

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
  /*max-width: 400px;*/
  width: 400px;

  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-size: 26px;
  resize: vertical;
}

.done-task.active {
  background-color: green;
}

.task-title.completed {
  text-decoration: line-through;
  color: #595959;
}

.category-detail {

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

.priority svg {
  fill: #E8E8E8;
}

.priority-value {
  font-size: 30px;
  font-weight: 500;
}
</style>