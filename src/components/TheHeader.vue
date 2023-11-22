<template>
  <header class="header">
    <div class="wrapper">
      <div class="header__wrapper">
        <add-task-button :modal-is-show="modalIsShow" @open-modal="openModal"></add-task-button>

        <header-nav-list></header-nav-list>
      </div>
    </div>
  </header>
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
.header {
  background-color: #363636;
  position: relative;
}

.header__wrapper {
  padding: 15px 0;
}
</style>