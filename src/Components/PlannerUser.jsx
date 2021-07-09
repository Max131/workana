import {ReactComponent as CheckedIcon} from './icons/check-square.svg';
import {ReactComponent as UncheckedIcon} from './icons/checkbox.svg';

const PlannerUser = ({user}) => {
  const userClasses = "mb-3 notification ";
  return(
    <div className={user.vote? userClasses + "is-info": userClasses + "is-info is-light"}>
      <div className="level is-mobile">
        <div className="level-item">
          {user.vote? <CheckedIcon />: <UncheckedIcon />} 
        </div>
        <div className="level-item has-text-weight-bold">
          {user.name}
        </div>
        <div className="level-item has-text-weight-bold is-size-4">
          {user.vote? user.vote: '-'}
        </div>
      </div>
    </div>
  );
}

export default PlannerUser;