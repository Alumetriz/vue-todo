<template>
  <main>
    <section class='tasks__section'>
      <div class='wrapper'>
        <div class='tasks__wrapper' v-if="tasks.length > 0">
          <task-item
              v-for="task in tasks"
              :key="task.id"
              :task="task"
              @select-task="selectTask"
          ></task-item>
        </div>

        <div class="tasks__wrapper empty" v-else>
          <img src="../../../src/assets/Checklist-rafiki%201.png" alt="Checklist">
          <h3 class="tasks-title">What do you want to do today?</h3>
          <p class="tasks-description">Tap + to add your tasks</p>
        </div>

      </div>
    </section>
  </main>
</template>

<script>

import TaskItem from "@/components/entities/TaskItem.vue";

export default {
  components: {TaskItem},
  props: {
    tasks: {
      type: Array,
      required: true,
    }
  },
  methods: {
    selectTask(task) {
      this.$emit('select-task', task);
    }
  }
}
</script>

<style scoped>
.tasks__section {
  padding: 80px 0;
}

.tasks-title {
  color: #F6F6F6F6;
  font-size: 26px;
  font-weight: 500;
}

.tasks-description {
  color: #F9F9F9F9;
  font-size: 20px;
  font-weight: 300;
}
.tasks__wrapper {
  display: flex;
  flex-direction: column;
  gap: 35px;
}
.tasks__wrapper.empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
}
</style>