import {useRef} from "react";
//import Workana from "./Workana";

const Login = ({users, data, setLogin}) =>{
	const login = useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		const [user] = users.filter(user => user._id === +login.current.value);
		if(!user) return;
		setLogin(user);
	};

	const LoginOption = ({user}) => {
		return(
			<option value={user._id} key={users._id}>{user.name}</option>
		);
	}

	return(
		<div className="loginPage">
			<div className="loginPage__container">
				<p className="title">♠️ Planning Poker</p>
				<p className="title">Please, select your user</p>
				<form className="loginForm" name="loginForm" onSubmit={handleSubmit}>
					<select name="user" id="user" className="loginForm__select" ref={login}>
						<option>👤</option>					
						{users.map(user => <LoginOption user={user} key={user._id} />)}
					</select>
					<button className="loginForm__button">Enter</button>
				</form>
			</div>
		</div>
	);
}
export default Login;
