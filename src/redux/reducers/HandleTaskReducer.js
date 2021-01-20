import {addTask, completeTask, removeTask} from "../actions/type";

const initializeState = localStorage.getItem('todos') === null ? {tasks: []} : {tasks: JSON.parse(localStorage.getItem('todos'))};

const HandleTaskReducer = (state = initializeState, action) => {

    switch (action.type) {
        case addTask: {
            let list = [...state.tasks, action.payload];
            localStorage.setItem('todos', JSON.stringify(list));
            return {
                ...state,
                tasks: list
            };
        }
        case completeTask: {
            let list = [...state.tasks];
            let index = list.findIndex((value => value.id === action.payload));
            if (index > -1) {
                list[index] = {...list[index], status: true}
                localStorage.setItem('todos', JSON.stringify(list));
            }
            return {
                ...state,
                tasks: list
            };
        }
        case removeTask: {
            let list = [...state.tasks];
            let index = list.findIndex((value => value.id === action.payload));
            if (index > -1) {
                list.splice(index, 1);
                localStorage.setItem('todos', JSON.stringify(list));
            }
            return {
                ...state,
                tasks: list
            };
        }
        default: {
            return {...state};
        }
    }
}

export default HandleTaskReducer;

