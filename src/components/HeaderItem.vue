<template>
  <li>
    <a href='#' class='link'>
      <div v-html="headerItem.svgIcon"></div>

      <span class="header-item__title">{{ headerItem.title }}</span>
    </a>
  </li>
</template>

<script>


export default {
  props: {
    headerItem: {
      type: Object,
      required: true,
    }
  },

}
</script>

<style scoped>
.link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.header-item__title {
  text-transform: capitalize;
  color: white;
  font-size: 17px;
}
</style>