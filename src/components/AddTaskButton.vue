<template>
  <div class="add-task-btn__wrapper">
    <button class="add-task__btn" @click="openModal">+</button>
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
  data() {
    return {

    }
  },
  methods: {
    openModal() {
      this.$emit('open-modal');
    }
  }
}
</script>

<style scoped>
.add-task__btn {
  font-size: 45px;
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  border-radius: 50%;
  border: none;
  width: 64px;
  height: 64px;
  background-color: #8687E7;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);

  cursor: pointer;
}
</style>