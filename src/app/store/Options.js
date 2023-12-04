import {OptionCalendar} from "@/app/store/OptionCalendar";
import {OptionCategories} from "@/app/store/OptionCategories";
import {OptionPriorities} from "@/app/store/OptionPriorities";


export const Options = {
    state: () => {
        return {
            optionsIsOpen: false,
            optionsModalType: null,
        }
    },
    mutations: {
        openOptions(state, option) {
            state.optionsIsOpen = true;
            state.optionsModalType = option;
        },
        closeOptions(state) {
            state.optionsIsOpen = false;
        },
        backToMainModal(state) {
            state.optionsIsOpen = false;
        },
    },
    modules: {
        OptionCalendar,
        OptionCategories,
        OptionPriorities,
    },
    namespaced: true,
}