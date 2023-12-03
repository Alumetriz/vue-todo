import moment from "moment/moment";

export const OptionCalendar = {
    state: () => {
        return {
            currentDate: moment(),
            selectedDate: null,
            selectedHour: null,
            selectedMinutes: null,
        }
    },
    mutations: {
        selectDate(state, day) {
            state.selectedDate = moment(state.currentDate).date(day);
        },
        selectHour(state, hour) {
            state.selectedHour = hour;
        },
        selectMinutes(state, minutes) {
            state.selectedMinutes = minutes;
        },
        prevMonth(state) {
            state.currentDate = state.currentDate.clone().subtract(1, 'month');
        },
        nextMonth(state) {
            state.currentDate = state.currentDate.clone().add(1, 'month');
        },
        saveDate(state, rootState) {
            rootState.optionsIsOpen = false;
        },
        cancelDate(state, rootState) {
            for (const key in state) {
                console.log(state)
                if (key !== 'currentDate') {
                    state[key] = null;
                }
            }
            rootState.optionsIsOpen = false;
        },
    },
    getters: {
        daysInMonth: (state) => {
            const days = [];
            const daysInCurrentMonth = state.currentDate.daysInMonth();

            for (let i = 1; i <= daysInCurrentMonth; i++) {
                days.push(i);
            }
            return days;
        },
        isSelectedHour: (state) => (hour) => {
            return state.selectedHour === hour;
        },
        isSelectedMinutes: (state) => (minutes) => {
            return state.selectedMinutes === minutes;
        },
        isSelectedDate: (state) => (day) => {
            return (
                state.selectedDate &&
                state.selectedDate.date() === day &&
                state.selectedDate.month() === state.currentDate.month()
            );
        },
    },
    namespaced: true,
}