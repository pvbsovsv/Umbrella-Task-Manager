
//css
import './Dashboard.css'
//components
import SearchBar from './SearchBar'
import StatCard from './StatCard'
import TaskList from './TaskList'
import RecentTaskCard from './RecentTaskCard'


function Dashboard() {
    return (
        <div className="dashboard-container">
            <SearchBar />

            <div className="dashboard">
                <h1>Hey there, Winston 👋</h1>

                <section className="stats-container">
                    <StatCard value={8} label={"Active Tasks"} />
                    <StatCard value={4} label={"High Priority"} />
                    <StatCard value={12} label={"Done"} />
                </section>

                <section className="rc-tasks-container">
                    <h2>Recent Tasks</h2>
                    <div className="rc-tasks">

                        <RecentTaskCard
                            id={2}
                            title="Fix login bug"
                            description="Users are getting logged out randomly on mobile"
                            priority="low"
                            dueDate="2026-04-18"
                            completed={false}
                        />
                        <RecentTaskCard
                            id={6}
                            title="Write unit tests"
                            description="Cover core components with Vitest and React Testing Library"
                            priority="medium"
                            dueDate="2026-05-05"
                            completed={false}
                        />
                        <RecentTaskCard
                            id={7}
                            title="Review pull requests"
                            description="Review and merge open PRs from the team"
                            priority="medium"
                            dueDate="2026-04-22"
                            completed={false}
                        />
                        <RecentTaskCard
                            id={8}
                            title="Update dependencies"
                            description="Upgrade project packages to latest stable versions"
                            priority="low"
                            dueDate="2026-04-24"
                            completed={false}
                        />

                        <RecentTaskCard
                            id={9}
                            title="Fix UI bugs"
                            description="Resolve reported layout issues on mobile devices"
                            priority="high"
                            dueDate="2026-04-21"
                            completed={false}
                        />

                        <RecentTaskCard
                            id={10}
                            title="Prepare sprint report"
                            description="Summarize completed tasks and progress for the week"
                            priority="medium"
                            dueDate="2026-04-23"
                            completed={false}
                        />

                    </div>


                </section>

                <section className="tasks-container">
                    <h2>Due Soon</h2>
                    <TaskList />
                </section>


            </div>
        </div>
    )
}

export default Dashboard