const Task = (props) => {
    
    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
            <p className="description">Desc: {props.description}</p>
        </div>
    )


}
export default Task;