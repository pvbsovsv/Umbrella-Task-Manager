

import './RecentTasks.css'


import RecentTaskCard from "./RecentTaskCard"

function RecentTasks({ taskList, searchFilteredTasks, searchQuery }) {

    let recentTaskstoDisplay

    if (searchQuery.length > 0 && searchFilteredTasks.length === 0) {
        recentTaskstoDisplay = <span className="no-tasks">No recent tasks match your search</span>
    } else if (searchQuery.length > 0) {
        recentTaskstoDisplay = searchFilteredTasks
    } else if (searchQuery.length === 0) {
        recentTaskstoDisplay = taskList.slice(0,6)
    }

    return (
        <div className="">

            <div className="rc-tasks">


                {Array.isArray(recentTaskstoDisplay)
                    ?
                    recentTaskstoDisplay.map((task =>
                        <RecentTaskCard
                            key={task.id}
                            {...task} />
                    ))
                    :
                    recentTaskstoDisplay
                }



            </div>

        </div>
    )
}

export default RecentTasks