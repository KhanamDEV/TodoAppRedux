import {addTask, removeTask, completeTask} from "./type";

export const actionAdd = data => {
    return {
        type: addTask,
        payload: data
    }
}

export const actionRemove = id => {
    return {
        type: removeTask,
        payload: id
    }
}

export const actionComplete = id => {
    return {
        type: completeTask,
        payload: id
    }
}