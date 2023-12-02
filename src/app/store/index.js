import {createStore} from "vuex";
import {modal} from "@/app/store/modal";
import {taskData} from "@/app/store/taskData";

export default createStore({
    state() {
        return {
            tasks: [],
            editModalIsShow: false,
            optionsIsOpen: false,
            optionsModalType: null,
            taskTitle: '',
            taskDescription: '',
            taskDeadline: '',
            taskCategory: '',
            taskPriority: 1,
            selectedTask: null,

            newTitle: '',
            newDescription: '',
        }
    },
    modules: {
        modal,
        taskData,
    },
});