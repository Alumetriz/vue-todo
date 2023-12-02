import {createApp} from 'vue'
import App from './App.vue'
import router from '@/app/router/index.js'
import store from '@/app/store/index.js'

import TheHeader from "@/components/widgets/TheHeader.vue";
import ModalWindow from "@/components/widgets/ModalWindow.vue";

import OptionCalendar from "@/components/widgets/OptionCalendar.vue";
import OptionCategories from "@/components/widgets/OptionCategories.vue";
import OptionPriorities from "@/components/widgets/OptionPriorities.vue";

import HeaderNavList from "@/components/entities/HeaderNavList.vue";
import HeaderItem from "@/components/entities/HeaderItem.vue";
import TasksList from "@/components/entities/TasksList.vue";

import AddTaskButton from "@/components/features/AddTaskButton.vue";
import AddTaskForm from "@/components/features/AddTaskForm.vue";
import EditTaskModal from "@/components/features/EditTaskModal.vue";

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';


library.add(fas);

const app = createApp(App);
app.component('the-header', TheHeader);
app.component('header-nav-list', HeaderNavList);
app.component('header-item', HeaderItem);
app.component('add-task-button', AddTaskButton);
app.component('tasks-list', TasksList);
app.component('modal-window', ModalWindow);
app.component('add-task-form', AddTaskForm);
app.component('option-calendar', OptionCalendar);
app.component('option-categories', OptionCategories);
app.component('option-priorities', OptionPriorities);
app.component('edit-task-modal', EditTaskModal);

app
    .use(router)
    .use(store)
    .mount('#app');