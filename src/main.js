import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TheHeader from "@/components/TheHeader.vue";
import HeaderNavList from "@/components/HeaderNavList.vue";
import HeaderItem from "@/components/HeaderItem.vue";
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import AddTaskButton from "@/components/AddTaskButton.vue";
import TasksList from "@/components/TasksList.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import AddTaskForm from "@/components/AddTaskForm.vue";

library.add(faHouse);

const app = createApp(App);
app.component('the-header', TheHeader);
app.component('header-nav-list', HeaderNavList);
app.component('header-item', HeaderItem);
app.component('add-task-button', AddTaskButton);
app.component('tasks-list', TasksList);
app.component('modal-window', ModalWindow);
app.component('add-task-form', AddTaskForm);

app.mount('#app');