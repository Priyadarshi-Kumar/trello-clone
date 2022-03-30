import React from 'react'
import TaskCard from '../TaskCard'
import "./styles.css"

const TaskGroup = ({task: {tasks, title}, id}) => {
  return (
    <div className='taskGroup'>
      <h3>{title}</h3>
      {tasks.map((task, taskId) => <TaskCard task={task} key={taskId}></TaskCard>)}
    </div>
  )
}

export default TaskGroup