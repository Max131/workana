const PlannerIssues = ({numUsers, issue}) =>{
  return(
    
      <div className="box has-background-dark">
        <div className="field has-addons">
          <div className="control">
            <span className="button is-static">Vote issue:</span>
          </div>
          <div className="control is-expanded">
              <input type="number" className="input" value={issue} readOnly/>
          </div>
          <div className="control">
            <span className="button is-static">{numUsers} Connected</span>
          </div>
        </div>
      </div>
    
  );
}

export default PlannerIssues;