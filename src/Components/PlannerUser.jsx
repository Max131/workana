import { ReactComponent as CheckedIcon } from "./icons/check-square.svg";
import { ReactComponent as UncheckedIcon } from "./icons/checkbox.svg";

const PlannerUser = ({ user, current, allHasVoted }) => {
  const isCurrent = user._id === current._id; 
  //const allHasVoted = users.every(user => user.vote);
  //console.log(allHasVoted);
  return (
    <div 
      className={user.vote ? "user user--voted" : "user"} 
      style={isCurrent? {order: "-1"}: {}}
    >
      <div>{user.vote ? <CheckedIcon /> : <UncheckedIcon />}</div>
      <div>{user.name} {isCurrent && '(You)'}</div>
      <div>{user.vote && allHasVoted? user.vote : "-"}</div>
    </div>
  );
};

export default PlannerUser;
