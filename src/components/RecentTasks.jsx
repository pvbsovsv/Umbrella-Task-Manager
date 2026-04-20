

import './RecentTasks.css'


import RecentTaskCard from "./RecentTaskCard"

function RecentTasks({ taskList }) {


    return (
        <div className="">

            <div className="rc-tasks">

                {taskList.slice(0 , 6).map((task =>
                    <RecentTaskCard
                        key={task.id}
                        {...task} />
                ))}

            </div>

        </div>
    )
}

export default RecentTasks