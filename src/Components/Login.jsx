import {useState, useRef} from "react";
import NewIssue from "./NewIssue";

/**
 * Component to login in the planning poker
 * @param  {array} 		options.users			Array of users
 * @param  {object} 	options.state    	Object with all app data
 * @param  {function} options.setState 	Function to set the app data
 * @param  {function} options.setLogin 	Function to set the current user
 * @param  {function} options.setIssue 	Function to set the issue to vote
 * @return {component}                  Login component
 */
const Login = ({users, state, setState, setLogin, setIssue}) =>{
	const loginName = useRef(null);
	const issueNumber = useRef(null);
	const [showIssueWindow, setShowIssueWindow] = useState(false);

	let issueIsVoted = {};

	state.data.forEach(issue => {
		let voted = (issue.members.every(member => member.vote !== false));
		issueIsVoted[issue.issue] = voted;
	});

	/**
	 * Handle if is selected user & issue
	 * @param  {event} e 	Submit event
	 * @return {null}
	 */
	const handleSubmit = (e) => {
		e.preventDefault();

		const [user] = users.filter(user => +user.id === +loginName.current.value);
		const [issue] = state.data.filter(issue => +issue.issue === +issueNumber.current.value);

		if(!user || !issue) return;
		setLogin(user);
		setIssue(issue);
	};

	/**
	 * Show the new issue window
	 * @return {null} 
	 */
	const handleClickNewIssue = () => {
		setShowIssueWindow(!showIssueWindow);
	}

	/**
	 * Component to set options in a select
	 * @param  {int}		options.value Value of the option component
	 * @param  {string} options.text  Text of the option
	 * @return {Component}            Option in select
	 */
	const SelectOption = ({value, text}) => {
		return(
			<option value={value} key={value}>{text}{issueIsVoted[value] && " (Voted)"}</option>
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
