<template>
  <modal-window :modal-is-show="modalIsShow" @close-modal="closeModal"></modal-window>
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
        // {
        //   id: Date.now(),
        //   title: 'Title task 2',
        //   description: 'Description task 2',
        //   deadline: null,
        //   category: null,
        //   priority: null,
        // },
        // {
        //   id: Date.now(),
        //   title: 'Title task 3',
        //   description: 'Description task 3',
        //   deadline: null,
        //   category: null,
        //   priority: null,
        // },
      ],
      modalIsShow: false,
    }
  },
  methods: {
    openModal() {
      this.modalIsShow = true;
    },
    closeModal() {
      this.modalIsShow = false;
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