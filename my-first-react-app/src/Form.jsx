function Form(){
    return (
        <form action="">

            <input type="text" />
            <input type="Button" id="Add"/>
            <br />
            <label htmlFor="All">All tasks</label>
            <input type="radio" id="All"/>
            <label htmlFor="Act">Active</label>
            <input type="radio" id="Act"/>
            <label htmlFor="Com">Completed</label>
            <input type="radio" id="Com"/>
            <br />
            <input type="checkbox" />
            <br />
        </form>
    );
}

export default Form