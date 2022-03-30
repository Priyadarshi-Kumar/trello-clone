export const reducer = (state, action) => {
    console.log("reducer called")
    switch(action.type) {
        case "ADD_TASK_GROUP":
            return [...state, {title: "New Task Group", tasks: []}]
        case "ADD_TASK_TO_GROUP":
            const {idx, data} = action.payload;
            const taskGroup = state[idx];
            taskGroup.tasks.push(data);
            state.splice(idx, 1, taskGroup);
            return [...state, ]
        case "DELETE_TASK_GROUP":
            const id = action.payload;
            state.splice(id, 1);
            return [...state]
        default: 
            return state;
    }
}