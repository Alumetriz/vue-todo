<template>
  <div class='modal-overlay' v-if="modalIsShow && !optionsIsOpen" @click="closeModal"></div>
  <div class="modal-overlay" v-if="modalIsShow && optionsIsOpen" @click="backToMainModal"></div>
  <div class='modal' v-if="modalIsShow && !optionsIsOpen" @click.stop>
    <div class='modal__wrapper'>
      <button class='close-btn' @click="closeModal">
        <i class='fas fa-times'></i>
      </button>

      <h1 class='modal-title'>Add Task</h1>

      <add-task-form
          v-model:model-value="title"
          @update:model-value="updateInput"
          v-model:text-area-value="description"
          @update:text-area-value="updateTextArea"
      ></add-task-form>

      <div class='buttons__wrapper'>
        <div class='first-column'>
          <button class='options-btn set-deadline' @click="openOptionsModal">
            <i class='far fa-clock'></i>
          </button>

          <button class='options-btn set-tag' @click="openOptionsModal">
            <i class='fas fa-tag'></i>
          </button>

          <button class='options-btn set-priority' @click="openOptionsModal">
            <i class='far fa-flag'></i>
          </button>
        </div>

        <div class='second-column'>
          <button class='send-task' @click="sendData">
            <i class='far fa-paper-plane'></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal" v-if="modalIsShow && optionsIsOpen" @click.stop>
    <div class="modal__wrapper calendar">
      <button class='back-btn' @click="backToMainModal">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon>
      </button>

      <h1 class='modal-title'>{{ optionsModalTitle }}</h1>

      <option-calendar
          v-if="optionsModalType === 'set-deadline'"
          @cancel="backToMainModal"
          @save-date="saveDate"
      ></option-calendar>

      <option-categories
          v-else-if="optionsModalType === 'set-tag'"
          @cancel="backToMainModal"
          @save-category="saveCategory"
      ></option-categories>

      <option-priorities
          v-else-if="optionsModalType === 'set-priority'"
          @cancel="backToMainModal"
          @save-priority="savePriority"
      ></option-priorities>

    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  components: {FontAwesomeIcon},
  props: {
    modalIsShow: {
      type: Boolean,
      default: false,
    },
    optionsIsOpen: {
      type: Boolean,
      default: false,
    },
    optionsModalType: {
      type: String,
    },
    taskTitle: [String, Number],
    taskDescription: [String, Number],
  },
  emits: [
    'send-title',
    'send-description',
    'send-data',
    'close-modal',
    'open-options-modal',
    'close-options-modal',
    'save-date',
    'send-date',
    'send-category',
    'send-priority',
  ],
  data() {
    return {
      title: '',
      description: '',
      deadline: null,
      category: null,
      priority: 1,
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
      this.clearInputs();
    },
    updateInput(value) {
      this.title = value
      this.$emit('send-title', this.title);
    },
    updateTextArea(value) {
      this.description = value;
      this.$emit('send-description', this.description);
    },
    clearInputs() {
      this.title = '';
      this.description = '';
    },
    sendData() {
      if (this.title.trim() === '') return;

      this.$emit('send-data', {
        title: this.title,
        description: this.description,
        deadline: this.deadline,
        category: this.category,
        priority: this.priority,
      });
      this.closeModal();
    },
    openOptionsModal(event) {
      const option = event.target.closest('.options-btn').classList[1];
      console.log(option)
      this.$emit('open-options-modal', option);
    },
    backToMainModal() {
      this.$emit('close-options-modal');
    },
    saveDate(data) {
      console.log(`${data.selectedDate.date()} ${data.selectedDate.format('MMM')}
      ${+data.selectedHour < 10 ? `0${data.selectedHour}` : data.selectedHour}
      ${+data.selectedMinute < 10 ? `0${data.selectedMinute}` : data.selectedMinute}`);

      const date = `${data.selectedDate.date()} ${data.selectedDate.format('MMM')}`;
      const hours = `${+data.selectedHour < 10 ? `0${data.selectedHour}` : data.selectedHour}`;
      const minutes = `${+data.selectedMinute < 10 ? `0${data.selectedMinute}` : data.selectedMinute}`;

      this.deadline = date + ' at ' + hours + ':' + minutes;
      this.$emit('send-date', this.deadline);
      this.backToMainModal();
    },
    saveCategory(obj) {
      this.category = obj;
      this.$emit('send-category', this.category);
      this.backToMainModal();
    },
    savePriority(value) {
      this.priority = value;
      this.$emit('send-priority', this.priority);
      this.backToMainModal();
    }
  },
  computed: {
    optionsModalTitle() {
      switch (this.optionsModalType) {
        case 'set-deadline':
          return 'Set Deadline';
        case 'set-tag':
          return 'Set Category';
        case 'set-priority':
          return 'Set Priority';
        default:
          return 'Add Task';
      }
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 1240px;
  padding: 0 20px;
  width: 100%;
  z-index: 4;
}

.modal__wrapper {
  position: relative;

  background-color: #363636;
  border-radius: 15px;
  width: 100%;

  padding: 60px 40px;

  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  align-items: center;
  gap: 40px;

  height: 60vh;
  overflow-y: auto;
}

.modal__wrapper.calendar {
  height: 80vh;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.74);
  backdrop-filter: blur(3px);

  z-index: 3;
}

.modal-title {
  font-size: 25px;
  color: #E8E8E8;
}

.close-btn,
.back-btn {
  font-size: 36px;
  color: red;
  background: none;
  border: none;
  cursor: pointer;

  position: absolute;
  top: 1rem;
  right: 1rem;
}

.buttons__wrapper {
  display: flex;
  justify-content: space-between;
}

.set-deadline,
.set-tag,
.set-priority,
.send-task {
  font-size: 25px;

  background: none;
  border: none;
  cursor: pointer;
}

.set-deadline,
.set-tag,
.set-priority {
  color: #FFFFFF;
  transition: all 0.3s linear;
}

.set-deadline:hover,
.set-tag:hover,
.set-priority:hover {
  color: #8687E7;
}

.send-task {
  color: #8687E7;
  transition: all 0.3s linear;
}

.send-task:hover {
  color: #FFFFFF;
}

.first-column {
  display: flex;
  gap: 50px;
}

</style>