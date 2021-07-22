import { ReactComponent as LogoutIcon } from "./icons/exit.svg";

const Logout = ({doLogout}) => {
	const handleClick = () => {
		doLogout({id: null, name: null});
	}
	return(
		<button className="logout" onClick={handleClick} title="Logout"><LogoutIcon /></button>
	);
}

export default Logout;