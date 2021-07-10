import {ReactComponent as CheckedIcon} from './icons/check-square.svg';
import {ReactComponent as UncheckedIcon} from './icons/checkbox.svg';

const PlannerUser = ({user}) => {
  return(
      <div className={user.vote? "user user--voted": "user"}>
        <div className="">
          {user.vote? <CheckedIcon />: <UncheckedIcon />} 
        </div>
        <div className="">
          {user.name}
        </div>
        <div className="">
          {user.vote? user.vote: '-'}
        </div>
      </div>
  );
}

export default PlannerUser;