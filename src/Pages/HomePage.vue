<template>
  <modal-window>
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
        <button class='send-task' @click="saveTaskData($store.state)">
          <i class='far fa-paper-plane'></i>
        </button>
      </div>
    </div>
  </modal-window>

  <!--  <edit-task-modal-->
  <!--      v-if="selectedTask"-->
  <!--      :edit-modal-is-show="editModalIsShow"-->
  <!--      :selected-task="selectedTask"-->
  <!--      :is-completed="selectedTask.isCompleted"-->
  <!--      @close-edit-modal="closeEditModal"-->
  <!--      @save-changes="updateSelectedTask"-->
  <!--      @complete-task="completeTask"-->
  <!--      @delete-task="deleteTask"-->
  <!--  ></edit-task-modal>-->

  <tasks-list></tasks-list>
  <!--      @select-task="selectTask"-->
</template>

<script>
import {mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations({
      saveTaskData: 'taskData/saveTaskData',
    }),
    handleOption(event) {
      const option = event.target.closest('.options-btn').classList[1]
      this.$store.commit('Options/openOptions', option);
    },
  }

  // methods: {
  //   clearInputs() {
  //     this.taskTitle = '';
  //     this.taskDescription = '';
  //     this.taskDeadline = '';
  //   },
  //   openModal() {
  //     this.modalIsShow = true;
  //   },
  //   closeModal() {
  //     this.modalIsShow = false;
  //     this.clearInputs();
  //   },
  //   selectTask(task) {
  //     this.selectedTask = task;
  //     this.editModalIsShow = true;
  //   },
  //   editTitle(value) {
  //     this.newTitle = value;
  //   },
  //   editDescription(value) {
  //     this.newDescription = value;
  //   },
  //   updateSelectedTask(updatedTask) {
  //     const task = this.tasks.find(task => task.id === updatedTask.id);
  //     task.title = updatedTask.newTitle;
  //     task.description = updatedTask.newDescription;
  //   },
  //   completeTask() {
  //     this.selectedTask.isCompleted = !this.selectedTask.isCompleted;
  //   },
  //   deleteTask(deletedTask) {
  //     this.tasks = this.tasks.filter((task) => task.id !== deletedTask.id);
  //     this.editModalIsShow = false;
  //   }
  // }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ul, ol {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #151515;
  position: relative;
}

.wrapper {
  max-width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
}

.svg-icon {
  width: 35px;
  height: 40px;
  fill: white;
  stroke: white;
  object-fit: cover;
}

.category-icon {
  width: 60px;
  height: 60px;
}

.task-category-image svg {
  width: 30px;
  height: 30px;
}

.task-category-image svg {
  z-index: 2;
}

.category-detail svg {
  width: 30px;
  height: 30px;
  z-index: 2;
}

/* modal */
.modal-title {
  font-size: 25px;
  color: #E8E8E8;
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