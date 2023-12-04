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
            }
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

            state.data.deadline = {
                date: rootState.Options.OptionCalendar.selectedDate,
                hours: rootState.Options.OptionCalendar.selectedHour,
                minutes: rootState.Options.OptionCalendar.selectedMinutes,
            };
            state.data.category = rootState.Options.OptionCategories.selectedCategory;
            state.data.priority = rootState.Options.OptionPriorities.priority;

            state.tasks.push({id: Date.now(), ...state.data});
            clearTaskData(state, rootState);
            rootState.modal.modalIsShow = false;
        },
    },
    namespaced: true,
}