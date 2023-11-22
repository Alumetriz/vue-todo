<template>
  <header class="header">
    <div class="wrapper">
      <div class="header__wrapper">
        <add-task-button></add-task-button>

        <header-nav-list></header-nav-list>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
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