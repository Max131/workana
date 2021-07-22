import { ReactComponent as CheckedIcon } from "./icons/check-square.svg";
import { ReactComponent as UncheckedIcon } from "./icons/checkbox.svg";

const PlannerUser = ({ user, current }) => {
  const ordered = user._id === current._id;
  return (
    <div 
      className={user.vote ? "user user--voted" : "user"} 
      style={ordered? {order: "-1"}: {}}
    >
      <div>{user.vote ? <CheckedIcon /> : <UncheckedIcon />}</div>
      <div>{user.name}</div>
      <div>{user.vote ? user.vote : "-"}</div>
    </div>
  );
};

export default PlannerUser;
