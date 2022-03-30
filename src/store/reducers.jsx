export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TASK_GROUP":
            return [...state, {title: "New Task Group", tasks: []}]
        case "ADD_TASK_TO_GROUP":
            const {idx, data} = action.payload;
            const taskGroup = state[idx];
            taskGroup.tasks.push(data);
            state.splice(idx, 1, taskGroup);
            return [...state, ]
        default: 
            return state;
    }
}