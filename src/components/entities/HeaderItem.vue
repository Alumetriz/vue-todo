<template>
  <li>
    <router-link :to="link">
      <div v-html="headerItem.svgIcon"></div>

      <span class="header-item__title">{{ headerItem.title }}</span>
    </router-link>
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
  computed: {
    link() {
      if (this.headerItem.title === 'Home') {
        return '/'
      } else if (this.headerItem.title === 'Calendar') {
        return '/CalendarPage'
      } else if (this.headerItem.title === 'Focus') {
        return '/FocusPage'
      } else if (this.headerItem.title === 'Profile') {
        return '/UserProfile'
      }
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