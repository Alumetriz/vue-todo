<template>
  <div class="task-screen__wrapper">
    <div class="task-options">
      <button
          :class="{'radio': true, 'done-task': true}"
          @click="completeTask"
      ></button>
      <div class="task-text">
        <label>
          <input
              type="text"
              :class="{'task-text__title': true}"
              placeholder="input task title"
              :value="title"
              @input="updateTitle"
          ></label>
        <label>
            <textarea
                placeholder="input task description"
                :class="{'task-text__descr': true}"
                :value="descr"
                @input="updateDescr"
            ></textarea>
        </label>
      </div>

    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  methods: {
    ...mapMutations('taskData/EditTask', [
      'changeTitle',
    ]),
    updateTitle(e) {
      this.$store.commit('taskData/EditTask/changeTitle', e.target.value)
    },
    updateDescr(e) {
      this.$store.commit('taskData/EditTask/changeDescription', e.target.value)
    }
  },
  computed: {
    ...mapState({
      title: state => state.taskData.EditTask.selectedTask?.title,
      descr: state => state.taskData.EditTask.selectedTask?.descr,
    })
  }
}
</script>

<style scoped>
.task-screen {
  display: none;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-color: #151515;
  z-index: 999;
  padding: 40px 20px;
  overflow: auto;
}

.task-screen.active {
  display: flex;
  overflow: hidden;
}

.task-screen__wrapper {
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 80px;
  overflow: auto;
}

.nav-btns {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.nav-btns .close,
.nav-btns .repeat {
  padding: 5px;
  font-size: 19px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #1D1D1D;
  border: none;
  border-radius: 8px;

  cursor: pointer;
}

.nav-btns .close svg,
.nav-btns .repeat svg {
  width: 35px;
  height: 35px;
}

.task-options {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 55px;
}

.edit {
  background: none;
  border: none;
  cursor: pointer;
}

.edit svg {
  width: 35px;
  height: 35px;
}

.radio {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  background-color: #363636;
  cursor: pointer;
  padding: 5px;
}

.radio.active {
  background-color: green;
}

.task-text {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.task-text h3,
.task-text p {
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
}

.task-text h3 {
  font-size: 26px;
}

.task-text p {
  font-size: 17px;
  color: #AFAFAF;
}

.task-details__list {
  display: flex;
  flex-direction: column;
  gap: 40px;

  max-width: 600px;
  margin: 0 auto;
}

.task-detail__icon {
  display: flex;
  align-items: center;
  gap: 15px;
}

.task-detail__icon svg {
  width: 35px;
  height: 35px;
}

.task-details__list-item {
  display: flex;
  justify-content: space-between;
}

.task-detail__title {
  font-size: 21px;
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  text-transform: capitalize;
}

.task-detail__title.delete-task {
  color: #FF4949;
}

.task-detail__icon.delete-task {
  cursor: pointer;
}

.detail {
  background-color: #595959;
  padding: 15px;
  border-radius: 8px;

  color: #FFFFFF;
  font-size: 17px;
  font-family: 'Open Sans', sans-serif;
  text-transform: capitalize;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  cursor: pointer;
}

.detail svg {
  width: 30px;
  height: 30px;
}

.save-changes__btn {
  background-color: #8687E7;
  border: none;
  border-radius: 8px;
  padding: 15px;
  width: 50%;
  margin: 0 auto;

  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 21px;
  color: #FFFFFF;
  text-transform: capitalize;

  cursor: pointer;
}

.task-text__title,
.task-text__descr {
  background-color: #151515;
  padding: 5px;
  border: none;
  border-radius: 5px;
  /*max-width: 400px;*/
  width: 400px;

  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-size: 26px;
  resize: vertical;
}

.done-task.active {
  background-color: green;
}

.task-text__title.complete,
.task-text__descr.complete {
  text-decoration: line-through;
  color: #595959;
}

.category-detail {

}

.category-title {
  font-size: 17px;
  font-weight: 400;
}

.choosed-category-title {
  text-align: center;
  font-size: 19px;
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  z-index: 2;
}

.category-detail {
  position: relative;
  background-color: #809CFF;
  border-radius: 5px;
  color: white;

  padding: 10px;
}

.category-detail:after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  z-index: 1;
}

.category-detail {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 15px;
}

.priority svg {
  fill: #E8E8E8;
}

.priority-value {
  font-size: 30px;
  font-weight: 500;
}
</style>