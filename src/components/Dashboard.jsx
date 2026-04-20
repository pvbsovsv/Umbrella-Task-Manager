
//css
import './Dashboard.css'
//components
import SearchBar from './SearchBar'
import StatCard from './StatCard'
import TaskList from './TaskList'
import RecentTasks from './RecentTasks'


function Dashboard({ taskList, deleteTask, markAsCompleted, editTask, setShowEditModal, setEditSelectedTask }) {


    //active tasks count for StatCard
    const activeTasks = taskList.filter(task => task.completed === false)

    //high priority count for Statcard
    const highPriorityTasks = taskList.filter(task => task.priority === "high" && !task.completed)

    //done tasks count for StatCard
    const doneTasks = taskList.filter(task => task.completed === true)




    return (
        <div className="dashboard-container">
            <SearchBar />

            <div className="dashboard">
                <h1>Hey there, Winston 👋</h1>

                <section className="stats-container">
                    <StatCard value={activeTasks.length} label={"Active Tasks"} />
                    <StatCard value={highPriorityTasks.length} label={"High Priority"} />
                    <StatCard value={doneTasks.length} label={"Done"} />
                </section>

                <section className="rc-tasks-container">
                    <h2>Recent Tasks</h2>
                    <RecentTasks taskList={taskList} />

                </section>

                <section className="tasks-container">
                    <h2>Due Soon</h2>
                    <TaskList
                        taskList={taskList.filter(task => task.completed === false)}
                        deleteTask={deleteTask}
                        markAsCompleted={markAsCompleted}
                        editTask={editTask}
                        setShowEditModal={setShowEditModal}
                        setEditSelectedTask={setEditSelectedTask}
                    />
                </section>


            </div>
        </div>
    )
}

export default Dashboard