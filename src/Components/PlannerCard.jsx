const PlannerCard = ({value, currentVote, emitVote}) => {
  
  const toggleClass = currentVote === value? 'is-info': 'is-info is-light';
  const cardClasses = `notification has-text-weight-bold has-text-centered is-clickable ${toggleClass}`;

  return(
    <div className="column is-5-mobile is-5-tablet is-3-desktop is-size-3">
      <div 
        className={cardClasses} 
        data-value={value} 
        onClick={() => emitVote(value)}
      >
        <p>{value}</p>
      </div>
    </div>
  );
}

export default PlannerCard;