<template>
  <div class='modal-overlay' v-if="modalIsShow && !optionsIsOpen" @click="closeModal"></div>
  <div class="modal-overlay" v-if="modalIsShow && optionsIsOpen" @click="backToMainModal"></div>
  <div class='modal' v-if="modalIsShow && !optionsIsOpen" @click.stop>
    <div class='modal__wrapper'>
      <button class='close-btn' @click="closeModal">
        <i class='fas fa-times'></i>
      </button>

      <h1 class='modal-title'>Add Task</h1>

      <add-task-form></add-task-form>

      <div class='buttons__wrapper'>
        <div class='first-column'>
          <button class='options-btn set-deadline' @click="handleOption">
            <i class='far fa-clock'></i>
          </button>

          <button class='options-btn set-tag' @click="handleOption">
            <i class='fas fa-tag'></i>
          </button>

          <button class='options-btn set-priority' @click="handleOption">
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

      <!--            <option-calendar-->
      <!--                v-if="optionsModalType === 'set-deadline'"-->
      <!--                @cancel="backToMainModal"-->
      <!--                @save-date="saveDate"-->
      <!--            ></option-calendar>-->

      <!--            <option-categories-->
      <!--                v-else-if="optionsModalType === 'set-tag'"-->
      <!--                @cancel="backToMainModal"-->
      <!--                @save-category="saveCategory"-->
      <!--            ></option-categories>-->

      <!--            <option-priorities-->
      <!--                v-else-if="optionsModalType === 'set-priority'"-->
      <!--                @cancel="backToMainModal"-->
      <!--                @save-priority="savePriority"-->
      <!--            ></option-priorities>-->

      <component :is="currentComponent"></component>

    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {mapMutations, mapState} from "vuex";

export default {
  components: {FontAwesomeIcon},
  methods: {
    ...mapMutations({
      closeModal: 'modal/closeModal',
      openOptions: 'Options/openOptions',
      closeOptions: 'Options/closeOptions',
      backToMainModal: 'Options/backToMainModal',
    }),
    handleOption(event) {
      const option = event.target.closest('.options-btn').classList[1]
      this.$store.commit('Options/openOptions', option);
    },
  },
  computed: {
    ...mapState({
      modalIsShow: state => state.modal.modalIsShow,
      optionsIsOpen: state => state.Options.optionsIsOpen,
      optionsModalType: state => state.Options.optionsModalType,
    }),

    currentComponent() {
      if (this.optionsModalType === 'set-deadline') {
        return 'option-calendar';
      } else if (this.optionsModalType === 'set-tag') {
        return 'option-categories';
      } else if (this.optionsModalType === 'set-priority') {
        return 'option-priorities';
      }
      return null;
    },
    optionsModalTitle() {
      let title = '';
      if (this.optionsModalTitle === 'set-deadline') {
        title = 'Set Deadline';
      } else if (this.optionsModalTitle === 'set-tag') {
        title = 'Set Category';
      } else if (this.optionsModalTitle === 'set-priority') {
        title = 'Set Priority';
      }
      return title;
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