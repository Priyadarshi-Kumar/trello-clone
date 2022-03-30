import React from 'react'
import TaskCard from '../TaskCard'
import useStore from "./../../store/context"
import "./styles.css"

const TaskGroup = ({task: {tasks, title, id}}) => {
  const [_, dispatch] = useStore();
  const deleteTaskGroup = () => {
    dispatch({
      type: "DELETE_TASK_GROUP",
      payload: id
    })
  }
  return (
    <div className='taskGroup'>
      <h3>{title}</h3>
      {tasks.map((task, taskId) => <TaskCard task={task} key={taskId}></TaskCard>)}
      <button onClick={deleteTaskGroup}>Delete Task Group</button>
    </div>
  )
}

export default TaskGroup