import React from "react";
import TaskGroup from "../../components/TakGroup";
import useStore from "../../store/context";

import "./styles.css";

const Home = () => {
    const [data, dispatch] = useStore();

    const addTaskGroup = () => {
        dispatch({
            type: "ADD_TASK_GROUP",
        });
    };

    return (
        <div>
            <section className="container">
                {data.map((task) => (
                    <TaskGroup task={task} key={task.id} id={task.id} />
                ))}
                <button className="addTaskGroup" onClick={addTaskGroup}>
                    Add Task Group
                </button>
            </section>
        </div>
    );
};

export default Home;
