<template>
  <modal-window></modal-window>

<!--      @close-modal="closeModal"-->
<!--      @send-title="getTitle"-->
<!--      @send-description="getDescription"-->
<!--      @send-date="getDate"-->
<!--      @send-category="getCategory"-->
<!--      @send-priority="getPriority"-->
<!--      @send-data="getData"-->
<!--      @open-options-modal="openOptionsModal"-->
<!--      @close-options-modal="closeOptionsModal"-->

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

  <tasks-list
      @select-task="selectTask"
  ></tasks-list>
</template>

<script>

export default {
  methods: {
    clearInputs() {
      this.taskTitle = '';
      this.taskDescription = '';
      this.taskDeadline = '';
    },
    openModal() {
      this.modalIsShow = true;
    },
    closeModal() {
      this.modalIsShow = false;
      this.clearInputs();
    },
    selectTask(task) {
      this.selectedTask = task;
      this.editModalIsShow = true;
    },
    editTitle(value) {
      this.newTitle = value;
    },
    editDescription(value) {
      this.newDescription = value;
    },
    updateSelectedTask(updatedTask) {
      const task = this.tasks.find(task => task.id === updatedTask.id);
      task.title = updatedTask.newTitle;
      task.description = updatedTask.newDescription;
    },
    completeTask() {
      this.selectedTask.isCompleted = !this.selectedTask.isCompleted;
    },
    deleteTask(deletedTask) {
      this.tasks = this.tasks.filter((task) => task.id !== deletedTask.id);
      this.editModalIsShow = false;
    }
  }
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
</style>