import {useRef} from "react";
//import Workana from "./Workana";

const Login = ({users, data, setLogin, setIssue}) =>{
	const loginName = useRef(null);
	const issueNumber = useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		const [user] = users.filter(user => user._id === +loginName.current.value);
		const [issue] = data.filter(issue => issue.issue === +issueNumber.current.value);
		if(!user || !issue) return;
		setLogin(user);
		setIssue(issue);
	};

	const handleNewIssue = () => {
		const newIssueNumber = Math.round(Math.random() * (220 - 150 + 1) + 150);
		const newIssue = { 
			...data[0], 
			issue: newIssueNumber, 
			members: [...users]
		};
		console.log(newIssue);
	}

	const SelectOption = ({value, text}) => {
		return(
			<option value={value} key={value}>{text}</option>
		);
	}

	return(
		<div className="loginPage">
			<div className="loginPage__container">
				<p className="title">♠️ Planning Poker</p>
				<p className="title">Select a user & issue</p>
				<form className="loginForm" name="loginForm" onSubmit={handleSubmit}>
					<select name="user" id="user" className="loginForm__select" ref={loginName}>
						<option>👤</option>
						{
							users.map(user => <SelectOption value={user._id} text={user.name} key={user._id} />)
						}
					</select>
					<select name="issue" id="issue" className="loginForm__select" ref={issueNumber}>
						<option>🔢</option>
						{
							data.map(issueNumber => <SelectOption value={issueNumber.issue} text={issueNumber.issue} key={issueNumber.issue} />)
						}
					</select>
					<button className="loginForm__button" type="submit">Enter</button>
					<button className="loginForm__button btnIssue" type="button" onClick={handleNewIssue}>New Issue</button>
				</form>
			</div>
		</div>
	);
}
export default Login;
