<template>
  <modal-window
      :modal-is-show="modalIsShow"
      :options-is-open="optionsIsOpen"
      :options-modal-type="optionsModalType"
      @close-modal="closeModal"
      @send-title="getTitle"
      @send-description="getDescription"
      @send-date="getDate"
      @send-data="getData"
      @open-options-modal="openOptionsModal"
      @close-options-modal="closeOptionsModal"
  ></modal-window>
  <the-header @open-modal="openModal"></the-header>

  <tasks-list :tasks="tasks"></tasks-list>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: Date.now(),
          title: 'Title task 1',
          description: 'Description task 1',
          deadline: '16 Oct at 20:33',
          category: 'Grocery',
          priority: 1,
        },
      ],
      modalIsShow: false,
      optionsIsOpen: false,
      optionsModalType: null,
      taskTitle: '',
      taskDescription: '',
      taskDeadline: '',
    }
  },
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
    getTitle(value) {
      this.taskTitle = value;
    },
    getDescription(value) {
      this.taskDescription = value;
    },
    getDate(value) {
      this.taskDeadline = value;
    },
    getData(value) {
      console.log(value)
      this.taskTitle = value.title;
      this.taskDescription = value.description;
      this.taskDeadline = value.deadline;

      this.tasks.push(
          {
            id: Date.now(),
            title: this.taskTitle,
            description: this.taskDescription,
            deadline: this.taskDeadline,
            category: 'Grocery',
            priority: 1,
          }
      );
      this.clearInputs();
    },
    openOptionsModal(option) {
      this.optionsModalType = option;
      this.optionsIsOpen = true;
    },
    closeOptionsModal() {
      this.optionsModalType = null;
      this.optionsIsOpen = false;
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
</style>