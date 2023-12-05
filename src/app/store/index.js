import {createStore} from "vuex";
import {modal} from "@/app/store/modal";
import {taskData} from "@/app/store/taskData";
import {Options} from "@/app/store/Options";

export const store = createStore({
    modules: {
        modal,
        taskData,
        Options,
    },
});

store.dispatch('taskData/loadTasksFromLocalStorage');

store.watch(
    (state) => state.taskData.tasks,
    (newTasks) => {
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    },
    {
        deep: true
    }
);