//css
import './Dashboard.css'
//components
import SearchBar from './SearchBar'
import StatCard from './StatCard'
import TaskList from './TaskList'
import RecentTasks from './RecentTasks'

import useTasks from '../hooks/useTasks'


function Dashboard() {
    
    const {taskList, deleteTask, markAsCompleted, editTask, setShowEditModal, setEditSelectedTask, isLoading, error, setSearchQuery} = useTasks()

    //active tasks count for StatCard
    const activeTasks = taskList.filter(task => task.completed === false)

    //high priority count for Statcard
    const highPriorityTasks = taskList.filter(task => task.priority === "high" && !task.completed)

    //done tasks count for StatCard
    const doneTasks = taskList.filter(task => task.completed === true)



    return (
        <div className="dashboard-container">
            <SearchBar setSearchQuery={setSearchQuery} />

            <div className="dashboard">
                <h1>Hey there, Winston 👋</h1>

                <section className="stats-container">
                    <StatCard value={activeTasks.length} label={"Active Tasks"} />
                    <StatCard value={highPriorityTasks.length} label={"High Priority"} />
                    <StatCard value={doneTasks.length} label={"Done"} />
                </section>

                <section className="rc-tasks-container">
                    <h2>Recent Tasks</h2>
                    <RecentTasks/>
                </section>

                <section className="tasks-container">


                    {isLoading ? <span>spinner loading</span> 
                    
                    
                    : error ? <span>error fetching data</span> 
                    
                    
                    : 
                    <>    
                        <h2>Due Soon</h2>
                        
                        <TaskList/>

                    </>}



                </section>


            </div>
        </div>
    )
}

export default Dashboard