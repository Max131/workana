const PlannerCard = ({value, currentVote, emitVote}) => {
  
  return(
    <div 
      className={currentVote === value? 'card card--active': 'card'} 
      data-value={value} 
      onClick={() => emitVote(value)}
    >
      <p>{value}</p>
    </div>
  );
}

export default PlannerCard;
