/**
 * Component to set a vote card
 * @param  {string}   options.value       Value of the card
 * @param  {string}   options.currentVote Value of the current vote
 * @param  {function} options.emitVote    Function to set the current vote
 * @return {null}
 */
const PlannerCard = ({ value, currentVote, emitVote }) => {
  return (
    <div
      className={currentVote === value ? "card card--active" : "card"}
      data-value={value}
      onClick={() => emitVote(value)}
    >
      <p>{value}</p>
    </div>
  );
};

export default PlannerCard;
