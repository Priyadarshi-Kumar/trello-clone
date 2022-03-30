import React from "react";
import TaskGroup from "../../components/TakGroup";
import useStore from "../../store/context";

import "./styles.css"

const Home = () => {
    const [data, dispatch] = useStore();

    const addTaskGroup = () => {
        dispatch({
            type: "ADD_TASK_GROUP",
        });
    };

    console.log("Home", data);

    return (
        <div>
            <section className="container">
                {data.map((task, idx) => (
                    <TaskGroup task={task} key={idx} id={idx} />
                ))}
                <button className="addTaskGroup" onClick={addTaskGroup}>Add Task Group</button>
            </section>
        </div>
    );
};

export default Home;
