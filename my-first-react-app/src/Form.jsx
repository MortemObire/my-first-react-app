function Form() {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css"
            />
            <div className="task-entry">
                <input
                    type="text"
                    id="text1"
                    placeholder="Add a new task..."
                />

                <button type="button" id="Add" aria-label="Add task">
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>

            <div className="task-filters">
                <input type="radio" name="filter" id="All" defaultChecked />
                <label htmlFor="All">All tasks</label>

                <input type="radio" name="filter" id="Act" />
                <label htmlFor="Act">Active</label>

                <input type="radio" name="filter" id="Com" />
                <label htmlFor="Com">Completed</label>
            </div>

            <div className="task-list">
                <label className="task-item">
                    <input type="checkbox" />
                    <span>Your first task will appear here</span>
                </label>
            </div>
        </form>
    );
}

export default Form;