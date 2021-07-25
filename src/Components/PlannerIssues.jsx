/**
 * Show the current issue and how many users are active
 * @param  {object} options.numUsers User object
 * @param  {int}    options.issue    Current issue to vote
 * @return {null}                  
 */
const PlannerIssues = ({ numUsers, issue }) => {
  return (
    <div className="issue">
      <p>Issue:</p>
      <input className="input" type="number" value={issue} readOnly />
      <p>{numUsers} Connected</p>
    </div>
  );
};

export default PlannerIssues;
