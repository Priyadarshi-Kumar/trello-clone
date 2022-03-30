import { v4 as uuidv4 } from 'uuid';

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TASK_GROUP":
            return [...state, {title: "New Task Group", id: uuidv4(), tasks: []}]
        case "ADD_TASK_TO_GROUP":
            const {idx, data} = action.payload;
            const taskGroup = state[idx];
            taskGroup.tasks.push(data);
            return state.splice(idx, 1, taskGroup);
        case "DELETE_TASK_GROUP":
            const id = action.payload;
            return state.filter(task => task.id !== id);
        default: 
            return state;
    }
}