

// TODO: подумать над тем, нужно ли вынести логику опциональных модалок в другие модули.

export const modal = {
    state: () => {
        return {
            modalIsShow: false,
            // optionsIsOpen: false,
            // optionsModalType: null,
        }
    },
    mutations: {
        openModal(state) {
            state.modalIsShow = true;
        },
        closeModal(state) {
            state.modalIsShow = false;
        },
        // openOptions(state, option) {
        //     state.optionsIsOpen = true;
        //     state.optionsModalType = option;
        // },
        // closeOptions(state) {
        //     state.optionsIsOpen = false;
        // },

        // selectDate(state, day) {
        //     state.optionCalendar.selectedDate = moment(state.optionCalendar.currentDate).date(day);
        // },
        // selectHour(state, hour) {
        //     state.optionCalendar.selectedHour = hour;
        // },
        // selectMinutes(state, minutes) {
        //     state.optionCalendar.selectedMinutes = minutes;
        // },
        // prevMonth(state) {
        //     state.optionCalendar.currentDate = state.optionCalendar.currentDate.clone().subtract(1, 'month');
        // },
        // nextMonth(state) {
        //     state.optionCalendar.currentDate = state.optionCalendar.currentDate.clone().add(1, 'month');
        // },
        // saveDate(state) {
        //     state.optionsIsOpen = false;
        // },
        // cancelDate(state) {
        //     for (const key in state.optionCalendar) {
        //         if (key !== 'currentDate') {
        //             state.optionCalendar[key] = null;
        //         }
        //     }
        // },
    },
    // getters: {
    //     isSelectedHour: (state) => (hour) => {
    //         return state.optionCalendar.selectedHour === hour;
    //     },
    //     isSelectedMinutes: (state) => (minutes) => {
    //         return state.optionCalendar.selectedMinutes === minutes;
    //     },
    //     isSelectedDate: (state) => (day) => {
    //         return (
    //             state.optionCalendar.selectedDate &&
    //             state.optionCalendar.selectedDate.date() === day &&
    //             state.optionCalendar.selectedDate.month() === state.optionCalendar.currentDate.month()
    //         );
    //     },
    // },
    namespaced: true
};