import {EditTask} from "@/app/store/EditTask";

const clearTaskData = (state, rootState) => {
    state.taskTitle = '';
    state.taskDescription = '';
    state.data.title = "";
    state.data.descr = "";
    rootState.Options.OptionCalendar.selectedDate = null;
    rootState.Options.OptionCalendar.selectedHour = null;
    rootState.Options.OptionCalendar.selectedMinutes = null;

    rootState.Options.OptionCategories.selectedCategory = null;
    rootState.Options.OptionPriorities.priority = 1;
}

export const taskData = {
    state() {
        return {
            taskTitle: '',
            taskDescription: '',
            tasks: [],
            data: {
                title: '',
                descr: '',
                deadline: null,
                category: null,
                priority: null,
            },
            selectedTask: null,
        }
    },
    mutations: {
        updateTitle(state, newTitle) {
            state.taskTitle = newTitle;
        },
        updateDescription(state, newDescr) {
            state.taskDescription = newDescr;
        },
        saveTaskData(state, rootState) {
            state.data.title = state.taskTitle;
            state.data.descr = state.taskDescription;

            const date = rootState.Options.OptionCalendar.selectedDate;
            const hours = rootState.Options.OptionCalendar.selectedHour;
            const minutes = rootState.Options.OptionCalendar.selectedMinutes;

            state.data.deadline = '' + date.format("MMM DD") + ' ' +
                (hours < 10 ? '0' + hours : hours) + ':' +
                (minutes < 10 ? '0' + minutes : minutes);
            state.data.category = rootState.Options.OptionCategories.selectedCategory;
            state.data.priority = rootState.Options.OptionPriorities.priority;

            state.tasks.push({id: Date.now(), ...state.data});
            clearTaskData(state, rootState);
            rootState.modal.modalIsShow = false;

            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        setTasks(state, loadedTasks) {
            state.tasks = loadedTasks;
        }
    },
    actions: {
        loadTasksFromLocalStorage({ commit }) {
            const savedTasks = localStorage.getItem('tasks');
            const parsedTasks = savedTasks ? JSON.parse(savedTasks) : [];
            commit('setTasks', parsedTasks);
        },
    },
    modules: {
        EditTask,
    },
    namespaced: true,
}