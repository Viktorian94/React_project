export function Task({task, toggleTask, removeTask}){
    return(
    <>
        <div className="center">
            <div key={task.id} className="item-task">
                <div onClick={() => toggleTask(task.id)}>
                    {task.title}
                </div>

                <div className="deleteItem" onClick={() => removeTask(task.id)}>
                    <p className="x">X</p>
                </div>
            </div>
        </div>

    </>
    );
}

