import {useState, useRef} from "react";
import NewIssue from "./NewIssue";

const Login = ({users, state, setState, setLogin, setIssue}) =>{
	const loginName = useRef(null);
	const issueNumber = useRef(null);
	const [showIssueWindow, setShowIssueWindow] = useState(false);

	let votedIssues = {};

	state.data.forEach(issue => {
		let voted = (issue.members.every(member => member.vote !== false));
		votedIssues[issue.issue] = voted;
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		const [user] = users.filter(user => +user.id === +loginName.current.value);
		const [issue] = state.data.filter(issue => +issue.issue === +issueNumber.current.value);

		if(!user || !issue) return;
		setLogin(user);
		setIssue(issue);
	};

	const handleClickNewIssue = () => {
		setShowIssueWindow(!showIssueWindow);
	}

	const SelectOption = ({value, text, type}) => {
		return(
			<option value={value} key={value}>{text}{votedIssues[value] && " (Voted)"}</option>
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
							users.map(user => <SelectOption value={user.id} text={user.name} key={user.id} />)
						}
					</select>
					<select name="issue" id="issue" className="loginForm__select" ref={issueNumber}>
						<option>🔢</option>
						{	
							state.data.map(issueNumber => <SelectOption value={issueNumber.issue} text={issueNumber.issue} key={issueNumber.issue} />)
						}
					</select>
					<button className="loginForm__button" type="submit">Enter</button>
					<button className="loginForm__button btnIssue" type="button" onClick={handleClickNewIssue}>New Issue</button>
				</form>
				{showIssueWindow && <NewIssue setShowIssueWindow={setShowIssueWindow} setState={setState} data={state} users={users} />}
			</div>
		</div>
	);
}
export default Login;
