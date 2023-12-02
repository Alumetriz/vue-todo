<template>
  <form action='#' class='add-task__form'>
    <div>
      <label for='task-title'></label>
      <input
          type='text'
          name='task-title'
          id='task-title'
          placeholder='Title'
          :value="taskTitle"
          @input="updateTitle"
      >
    </div>
    <div>
      <label for='task-descr'></label>
      <textarea
          name='task-descr'
          id='task-descr'
          placeholder='Description'
          :value="taskDescription"
          @input="updateDescription"
      ></textarea>
    </div>
  </form>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState({
      taskTitle: state => state.taskData.taskTitle,
      taskDescription: state => state.taskData.taskDescription,
    })
  },
  methods: {
    updateTitle(event) {
      this.$store.commit('taskData/updateTitle', event.target.value);
    },
    updateDescription(event) {
      this.$store.commit('taskData/updateDescription', event.target.value);
    }
  }
}
</script>

<style scoped>
.add-task__form {
  display: flex;
  flex-direction: column;
  gap: 50px;
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
</style>