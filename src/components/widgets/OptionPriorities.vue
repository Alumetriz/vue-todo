<template>
  <div class="priorities__wrapper">
    <div
        v-for="priority in 10"
        :key="priority"
        @click="selectPriority(priority)"
        :class="{priority: true, selected: isSelected(priority)}"
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1C4.44772 1 4 1.44772 4 2V22C4 22.5523 4.44772 23 5 23C5.55228 23 6 22.5523 6 22V14H19C19.3603 14 19.6927 13.8062 19.8702 13.4927C20.0477 13.1792 20.0429 12.7944 19.8575 12.4855L17.1662 8L19.8575 3.5145C20.0429 3.20556 20.0477 2.82081 19.8702 2.5073C19.6927 2.19379 19.3603 2 19 2L6 2C6 1.44772 5.55228 1 5 1ZM6 4V12H17.2338L15.1425 8.5145C14.9525 8.19781 14.9525 7.80219 15.1425 7.4855L17.2338 4H6Z"></path>
        </g>
      </svg>
      <span class="priority-value">{{ priority }}</span>
    </div>
  </div>
  <div class="set-priority__btns">
    <button
        class="set-priority__btn cancel-btn"
        @click="backToMainModal"
    >Cancel
    </button>
    <button
        class="set-priority__btn save-priority__btn"
        @click="saveOption"
    >Save
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      priority: 1,
    }
  },
  emits: ['cancel', 'save-priority'],
  methods: {
    selectPriority(priority) {
      this.priority = priority;
    },
    isSelected(priority) {
      return this.priority === priority;
    },
    backToMainModal() {
      this.$emit('cancel');
    },
    saveOption() {
      this.$emit('save-priority', this.priority);
    },
  }
}
</script>

<style scoped>

.priorities__wrapper {
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
}

@media screen and (max-width: 700px) {
  .priorities__wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}


.priority {
  width: 80px;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.3s linear;
}
.priority.selected,
.priority:hover {
  background-color: #8687E7;
}

.priority {
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
  width: 30px;
  height: 30px;
}

.priority svg {
  fill: #E8E8E8;
}

.priority-value {
  font-size: 30px;
  font-weight: 500;
}

.set-priority__btns {
  display: flex;
  justify-content: space-around;
}

.set-priority__btn {
  width: 120px;
  height: 60px;
  text-transform: capitalize;
  font-size: 17px;
}

.cancel-btn {
  background-color: transparent;
  color: #8687E7;
  border: none;
  cursor: pointer;
}

.save-priority__btn {
  background-color: #8687E7;
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  cursor: pointer;
}
</style>