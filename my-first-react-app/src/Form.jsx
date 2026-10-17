import { useState } from "react";

function Form() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState("");
    const [filter, setFilter] = useState("All");

    function addTask(e) {
        e.preventDefault();

        const trimmedText = taskText.trim();

        if (trimmedText === "") {
            return;
        }

        const newTask = {
            id: crypto.randomUUID(),
            text: trimmedText,
            completed: false
        };

        setTasks([...tasks, newTask]);
        setTaskText("");
    }

    function toggleTask(id) {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    }

    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === "Act") {
            return !task.completed;
        }

        if (filter === "Com") {
            return task.completed;
        }

        return true;
    });

    return (
        <form onSubmit={addTask}>
            <div className="task-entry">
                <input
                    type="text"
                    id="text1"
                    placeholder="Add a new task..."
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                />

                <button type="submit" id="Add" aria-label="Add task">
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>

            <div className="task-filters">
                <input
                    type="radio"
                    name="filter"
                    id="All"
                    checked={filter === "All"}
                    onChange={() => setFilter("All")}
                />
                <label htmlFor="All">All tasks</label>

                <input
                    type="radio"
                    name="filter"
                    id="Act"
                    checked={filter === "Act"}
                    onChange={() => setFilter("Act")}
                />
                <label htmlFor="Act">Active</label>

                <input
                    type="radio"
                    name="filter"
                    id="Com"
                    checked={filter === "Com"}
                    onChange={() => setFilter("Com")}
                />
                <label htmlFor="Com">Completed</label>
            </div>

            <div className="task-list">
                {filteredTasks.length === 0 ? (
                    <p>
                        {tasks.length === 0
                            ? "Your first task will appear here"
                            : "No tasks to display"}
                    </p>
                ) : (
                    filteredTasks.map((task) => (
                        <div className="task-item" key={task.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTask(task.id)}
                                />

                                <span
                                    style={{
                                        textDecoration: task.completed
                                            ? "line-through"
                                            : "none"
                                    }}
                                >
                                    {task.text}
                                </span>
                            </label>

                            <button
                                type="button"
                                className="delete-task"
                                onClick={() => deleteTask(task.id)}
                                aria-label={`Delete ${task.text}`}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                )}
            </div>
        </form>
    );
}

export default Form;