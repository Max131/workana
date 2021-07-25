import { ReactComponent as LogoutIcon } from "./icons/exit.svg";

/**
 * Component to log out the current issue votation
 * @param  {function} options.doLogout Function to log out
 * @return {null}
 */
const Logout = ({doLogout}) => {
	const handleClick = () => {
		doLogout({id: null, name: null});
	}
	return(
		<button className="logout" onClick={handleClick} title="Logout"><LogoutIcon /></button>
	);
}

export default Logout;