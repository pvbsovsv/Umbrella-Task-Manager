import './StatCard.css'






function StatCard({ label, value }) {

    //border color regarding label
    function getColor() {
        if (label === "Active Tasks") return "var(--priority-medium)"
        if (label === "High Priority") return "var(--priority-high)"
        if (label === "Done") return "var(--priority-low)"
        //else
        return "(var--text-primary)"
    }






    return (
        <div className='stat-card'>

           <div className="stat-value-container">
            <p className="stat-value" >{value}</p>
           </div>
            <span className="stat-label">{label}</span>
        </div>
    )
}

export default StatCard