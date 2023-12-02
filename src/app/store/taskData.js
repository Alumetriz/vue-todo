export const taskData = {
    state() {
        return {
            taskTitle: '',
            taskDescription: '',
        }
    },
    mutations: {
        updateTitle(state, newTitle) {
            state.taskTitle = newTitle;
        },
        updateDescription(state, newDescr) {
            state.taskDescription = newDescr;
        }
    },
    namespaced: true,
}