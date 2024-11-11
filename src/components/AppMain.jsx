const tasks = require('../database/tasks.js')
console.log(tasks);

export default function AppMain() {

    const currentTasks = tasks.filter(task => task.state !== "completed")
    const completeTasks = tasks.filter(task => task.state === "completed")


    return (
        <main>
            <section className="current">
                <h2>Current Tasks ({currentTasks.length})</h2>
                <ul>
                    {currentTasks.map(task => <li key={task.id}>
                        <h3>
                            {task.title}
                        </h3>
                        <div className="badge">
                            {task.state}
                        </div>
                        <p>Priority: {task.priority}</p>
                        <p>Est. time: {task.estimatedTime}</p>
                    </li>
                    )}
                </ul>
            </section>
            <hr />
            <section className="complete">
                <h2>Complete Tasks({completeTasks.length})</h2>
                <ul>
                    {completeTasks.map(task => <li key={task.id}>
                        <h3>
                            {task.title}
                        </h3>
                        <div className="badge">
                            {task.state}
                        </div>
                        <p>Priority: {task.priority}</p>
                        <p>Est. time: {task.estimatedTime}</p>
                    </li>)}
                </ul>
            </section>
        </main>
    )
}