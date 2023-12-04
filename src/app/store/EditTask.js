export const EditTask = {
    state: () => {
        return {
            selectedTask: null,
            newData: {
                newTitle: null,
                newDescr: null,
                newDeadline: null,
                newCategory: null,
                newPriority: null,
            }
        }
    },
    mutations: {
        selectTask(state, task) {
            state.selectedTask = task;
        },
        changeTitle(state, newTitle) {
            // const selected = rootState.taskData.tasks.filter((task) => task.id === state.selectedTask.id);
            // console.log(newValue)
            state.newData.newTitle = newTitle;
        },
        changeDescription(state, newDescr) {
            state.newData.newDescr = newDescr;
        }
    },
    namespaced: true,
}