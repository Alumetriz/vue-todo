<template>
  <form action='#' class='add-task__form'>
    <div>
      <label for='task-title'></label>
      <input
          type='text'
          name='task-title'
          id='task-title'
          placeholder='Title'
          :value="modelValue"
          @input="updateInput($event.target.value)"
      >
    </div>
    <div>
      <label for='task-descr'></label>
      <textarea
          name='task-descr'
          id='task-descr'
          placeholder='Description'
          :value="textAreaValue"
          @input="updateTextArea($event.target.value)"
      ></textarea>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    modelValue: String,
    textAreaValue: String,
  },
  emits: ['update:modelValue', 'update:textAreaValue'],
  methods: {
    updateInput(value) {
      this.$emit('update:modelValue', value);
    },
    updateTextArea(value) {
      this.$emit('update:textAreaValue', value)
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