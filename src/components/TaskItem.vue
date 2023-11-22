<template>
  <div class="task">
    <svg class="options-task__btn" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
      <path
          d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"></path>
    </svg>

    <div class="task__main-info">
      <h2 class="task-title">{{ task.title }}</h2>
      <p class="task-deadline">{{ task.deadline }}</p>
    </div>

    <div class="task__part-info">
      <div class="category" style="background-color: #CCFF80">
        <svg fill="#21A300" viewBox="0 0 100 100" version="1.1" xml:space="preserve"
             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> <g id="store"></g>
            <g id="groceries"> <g> <path
                d="M80.5,36.1c-0.3-0.2-0.7-0.2-1,0l-0.5,0.4c-0.4-3.7-2.2-7-5-9.3c0-0.1,0-0.2,0-0.2c0.1-0.5,2.5-1.6,5.2-2 c0.4-0.1,0.7-0.3,0.8-0.7c0.1-0.4,0-0.7-0.2-1l-3-3c-0.2-0.2-0.6-0.3-0.9-0.3c-2.1,0.5-3.4,1.7-4.3,2.9c0-5.3-3.9-7.7-3.9-7.8 c-0.3-0.2-0.6-0.2-0.9-0.1c-0.3,0.1-0.5,0.4-0.6,0.7c-1.1,3.8-0.2,6.6,0.9,8.4C66.5,24.1,66,24,65.5,24c-0.9-2.8-2.9-5-5.5-6.2 c1.4-0.7,3.2-1.8,4.8-3.4c3.3-3.3,4.4-7.3,4.5-7.5c0.1-0.3,0-0.7-0.3-1c-0.3-0.3-0.6-0.4-1-0.3c-0.2,0-4.2,1.2-7.5,4.5 c-1.7,1.7-2.8,3.6-3.5,5.1c-0.7-1.5-1.8-3.4-3.5-5.1C50.2,7,46.1,5.8,46,5.7c-0.4-0.1-0.7,0-1,0.3c-0.3,0.3-0.4,0.6-0.3,1 c0,0.1,0.2,0.7,0.6,1.6C42.8,5.8,39.1,4,35,4c-7.7,0-14,6.3-14,14v18.5l-0.4-0.3c-0.3-0.2-0.7-0.2-1-0.1C19.2,36.3,19,36.6,19,37 v58c0,0.6,0.4,1,1,1h60c0.6,0,1-0.4,1-1V37C81,36.6,80.8,36.3,80.5,36.1z M75.7,22.1l1.3,1.3c-1.8,0.5-4,1.3-4.7,2.6 c-0.1,0-0.1-0.1-0.2-0.1C72.4,25.1,73.3,23,75.7,22.1z M67.6,17.9c1,1.1,2.2,3.1,1.8,6.3C68.4,23,67.2,21,67.6,17.9z M77,37.8 l-3,2l-5.5-3.6c-0.3-0.2-0.8-0.2-1.1,0l-2,1.4C65.8,32.9,66,29,66,27c0-0.3,0-0.6,0-1C72.1,26.5,76.9,31.6,77,37.8z M64,27 c0,2.1-0.3,6.7-0.7,12L62,39.8l-5.4-3.6c-0.3-0.2-0.8-0.2-1.1,0L50,39.8l-1-0.7c0,0,0-0.1,0-0.1V23.2c1.4-2.6,4.1-4.2,7-4.2 C60.4,19,64,22.6,64,27z M61.9,11.6c1.5-1.5,3.3-2.5,4.6-3.2c-0.6,1.3-1.6,3.1-3.2,4.6c-1.5,1.5-3.3,2.5-4.6,3.2 C59.4,14.9,60.4,13.2,61.9,11.6z M52.1,11.6c1.5,1.5,2.5,3.3,3.2,4.6c-1.3-0.6-3.1-1.6-4.6-3.2c-1.5-1.5-2.5-3.3-3.2-4.6 C48.8,9.1,50.5,10.1,52.1,11.6z M49.2,14.5c1.3,1.3,2.7,2.2,3.9,2.9c-1.6,0.5-3,1.3-4.2,2.5V18c0-1.6-0.3-3.2-0.8-4.7 C48.5,13.7,48.8,14.1,49.2,14.5z M23,18c0-6.6,5.4-12,12-12s12,5.4,12,12v19.8l-2.5-1.6c-0.3-0.2-0.8-0.2-1.1,0L38,39.8l-5.4-3.6 c-0.3-0.2-0.8-0.2-1.1,0L26,39.8l-3-2V18z M79,94H21V38.9l4.4,3c0.3,0.2,0.8,0.2,1.1,0l5.4-3.6l5.4,3.6c0.3,0.2,0.8,0.2,1.1,0 l5.4-3.6l5.4,3.6c0.3,0.2,0.8,0.2,1.1,0l5.4-3.6l5.4,3.6c0.3,0.2,0.8,0.2,1.1,0l5.4-3.6l5.5,3.6c0.3,0.2,0.8,0.2,1.1,0l4.5-3V94z"></path>
              <path
                  d="M35,23c2.3,0,10-0.2,10-3s-7.7-3-10-3s-10,0.2-10,3S32.7,23,35,23z M35,19c3.9,0,6.6,0.6,7.6,1c-1,0.4-3.7,1-7.6,1 s-6.6-0.6-7.6-1C28.4,19.6,31.1,19,35,19z"></path>
              <path
                  d="M45,33c0-2.8-7.7-3-10-3s-10,0.2-10,3s7.7,3,10,3S45,35.8,45,33z M35,32c3.9,0,6.6,0.6,7.6,1c-1,0.4-3.7,1-7.6,1 s-6.6-0.6-7.6-1C28.4,32.6,31.1,32,35,32z"></path>
              <path d="M57,28h5c0.6,0,1-0.4,1-1s-0.4-1-1-1h-5c-0.6,0-1,0.4-1,1S56.4,28,57,28z"></path>
              <path d="M57,33h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6c0.6,0,1-0.4,1-1S57.6,33,57,33z"></path>
              <path
                  d="M73,52H27c-0.6,0-1,0.4-1,1v26c0,0.6,0.4,1,1,1h46c0.6,0,1-0.4,1-1V53C74,52.4,73.6,52,73,52z M72,78H28V54h44V78z"></path> </g> </g>
            <g id="fruits"></g>
            <g id="bakery"></g>
            <g id="hygiene_product"></g>
            <g id="detergent"></g>
            <g id="cooking_oil"></g>
            <g id="snacks"></g>
            <g id="canned_food"></g>
            <g id="wheat_flour"></g>
            <g id="milk_powder"></g>
            <g id="coffee_powder"></g>
            <g id="tea_bag"></g>
            <g id="meat"></g>
            <g id="chicken"></g>
            <g id="cart"></g>
            <g id="sausage"></g>
            <g id="egg"></g>
            <g id="drink"></g>
            <g id="vegetable"></g> </g></svg>
        <span class="choosed-category-title">{{ task.category }}</span>
      </div>
      <div class="priority">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             style="fill: rgb(232, 232, 232);">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5 1C4.44772 1 4 1.44772 4 2V22C4 22.5523 4.44772 23 5 23C5.55228 23 6 22.5523 6 22V14H19C19.3603 14 19.6927 13.8062 19.8702 13.4927C20.0477 13.1792 20.0429 12.7944 19.8575 12.4855L17.1662 8L19.8575 3.5145C20.0429 3.20556 20.0477 2.82081 19.8702 2.5073C19.6927 2.19379 19.3603 2 19 2L6 2C6 1.44772 5.55228 1 5 1ZM6 4V12H17.2338L15.1425 8.5145C14.9525 8.19781 14.9525 7.80219 15.1425 7.4855L17.2338 4H6Z"></path>
          </g>
        </svg>
        <span class="priority-value">{{ task.priority }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.task {
  background-color: #363636;
  position: relative;
  padding: 25px;
  display: flex;
  gap: 25px;
  border-radius: 5px;
}

.options-task__btn {
  background: none;
  border: none;
  cursor: pointer;

  fill: #FFFFFF;
  font-size: 40px;

  margin: auto 0;
}

.task-title {
  color: #FFFFFF;
  font-size: 35px;
  font-weight: 500;
}

.task-deadline {
  color: #AFAFAF;
  font-size: 21px;
  font-weight: 500;
}

.task__main-info {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.task__part-info {
  display: flex;
  gap: 15px;

  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 15px 15px 0;
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

.priority-value {
  font-size: 30px;
  font-weight: 500;
}

.category {
  position: relative;
  background-color: #809CFF;
  border-radius: 5px;
  color: white;

  padding: 10px;
}

.category:after {
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

.priority,
.category {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 15px;
}

.priority {
  border: 1px solid #8687E7;
  border-radius: 5px;
  color: #E8E8E8;

  padding: 10px;
  gap: 5px;
}

.priority svg,
.category svg {
  width: 30px;
  height: 30px;
}

.category svg {
  z-index: 2;
}

.priority svg {
  fill: #E8E8E8;
}
</style>