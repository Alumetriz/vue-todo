import {createStore} from "vuex";
import {modal} from "@/app/store/modal";
import {taskData} from "@/app/store/taskData";
import {Options} from "@/app/store/Options";

export default createStore({
    state() {
        return {
            // tasks: [],
            // editModalIsShow: false,
            // taskDeadline: '',
            // taskCategory: '',
            // taskPriority: 1,
            // selectedTask: null,
            //
            // newTitle: '',
            // newDescription: '',
        }
    },
    modules: {
        modal,
        taskData,
        Options,
    },
});