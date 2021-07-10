const PlannerIssues = ({numUsers, issue}) =>{
  return(
        <div className="issue">
          <p>Issue:</p>
          <input className="input" type="number" value={issue} readOnly/>
          <p>{numUsers} Connected</p>
        </div>
  );
}

export default PlannerIssues;
