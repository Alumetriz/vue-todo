export const OptionPriorities = {
    state: () => {
        return {
            priority: 1,
        }
    },
    mutations: {
        selectPriority(state, priority) {
            state.priority = priority;
        },
        savePriority(state, rootState) {
            if (!state.priority) return;
            rootState.optionsIsOpen = false;
        },
        cancelPriorities(state, rootState) {
            state.priority = 1;
            rootState.optionsIsOpen = false;
        }
    },
    getters: {
        isSelected: (state) => (priority) => {
            return state.priority === priority;
        },
    },
    namespaced: true,
}