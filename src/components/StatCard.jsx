import './StatCard.css'






function StatCard({ label, value }) {


    return (
        <div className='stat-card glass'>

           <div className="stat-value-container">
            <p className="stat-value" >{value}</p>
           </div>
            <span className="stat-label">{label}</span>
        </div>
    )
}

export default StatCard