<template>
  <div class='modal-overlay' v-if="modalIsShow" @click="closeModal"></div>
  <div class='add-task__modal' v-if="modalIsShow" @click.stop>
    <div class='modal__wrapper'>
      <button class='close-btn' @click="closeModal">
        <i class='fas fa-times'></i>
      </button>

      <h1 class='modal-title'>Add Task</h1>

      <form action='#' class='add-task__form'>
        <div>
          <label for='task-title'></label>
          <input type='text' name='task-title' id='task-title' placeholder='Title'>
        </div>
        <div>
          <label for='task-descr'></label>
          <textarea name='task-descr' id='task-descr' placeholder='Description'></textarea>
        </div>
      </form>

      <div class='buttons__wrapper'>
        <div class='first-column'>
          <button class='set-deadline'>
            <i class='far fa-clock'></i>
          </button>

          <button class='set-tag'>
            <i class='fas fa-tag'></i>
          </button>

          <button class='set-priority'>
            <i class='far fa-flag'></i>
          </button>
        </div>

        <div class='second-column'>
          <button class='send-task'>
            <i class='far fa-paper-plane'></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalIsShow: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    }
  }
}
</script>

<style scoped>
.add-task__modal {
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

  height: 50vh;
  overflow-y: auto;
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

.close-btn {
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

.add-task__form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.add-task__form input,
.add-task__form textarea {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  width: 100%;
  min-height: 50px;

  box-shadow: none;
  resize: vertical;

  padding: 10px;
}

.add-task__form input:focus,
.add-task__form textarea:focus {
  border: 1px solid white;
  border-radius: 5px;
  outline: none;
}

.first-column {
  display: flex;
  gap: 50px;
}

</style>