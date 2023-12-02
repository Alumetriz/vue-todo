export const modal = {
    state: () => {
        return {
            modalIsShow: false,
        }
    },
    mutations: {
        openModal(state) {
            state.modalIsShow = true;
        },
        closeModal(state) {
            state.modalIsShow = false;
        }
    },
    namespaced: true
};