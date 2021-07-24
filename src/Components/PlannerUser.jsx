import { ReactComponent as CheckedIcon } from "./icons/check-square.svg";
import { ReactComponent as UncheckedIcon } from "./icons/checkbox.svg";

const PlannerUser = ({ user, current, allHasVoted }) => {
  const isCurrent = user.id === current.id; 
  
  return (
    <div 
      className={user.vote ? "user user--voted" : "user"} 
      style={isCurrent? {order: "-1"}: {}}
    >
      <div>{user.vote ? <CheckedIcon /> : <UncheckedIcon />}</div>
      <div>{user.name} {isCurrent && '(You)'}</div>
      <div>{allHasVoted? user.vote : isCurrent && user.vote? user.vote: "-"}</div>
    </div>
  );
};

export default PlannerUser;
