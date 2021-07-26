import {useRef} from "react";

/**
 * Add a new Issue to vote
 * @param  {function} options.setShowIssueWindow Function to hide the component
 * @param  {function} options.setState           Function to set the app current issue
 * @param  {object}		options.data               Global state
 * @param  {array}		options.users              Array of the app users
 * @return {null}
 */
const NewIssue = ({setShowIssueWindow, setState, data, users}) => {
	
	const issueNumber = useRef(null)
	
	/**
	 * Check if the issue exists, if not, add a new issue
	 * @param  {event} e 	Submit event
	 * @return {null}
	 */
	const handleSubmit = (e) => {
		e.preventDefault();

		let issueExist = !data.data.every(issue => issue.issue !== +issueNumber.current.value);
		if(issueExist) {
			alert(`The issue number "${issueNumber.current.value}" already exists`);
			return;
		}

		users.forEach(user => user["vote"] = false);
		const newIssue = {
	    						issue: +issueNumber.current.value,
	    						validVotes: [1, 2, 3, 5, 8, 13, 20, 40, "?"],
							    members: [...users]
								};

		setState({...data, data: [...data.data, newIssue]});
		const putIssue = async ()=> {
			await fetch("https://todos-9a65.restdb.io/rest/issues", {
									method: "POST",
									headers: {
										"x-api-key": "60f158b149cd3a5cfbd2291f",
										"cache-control": "no-cache",
										"content-type": "application/json"
									},
									body: JSON.stringify(newIssue),
									credentials: "same-origin"})
							.then(res => res.json())
							.then(data => {
									data.hasOwnProperty("_id")? alert("The issue has been added!"): alert (`Error: ${data.message}`)
								})
							.catch(error => alert(error));
		}
		putIssue();
		setShowIssueWindow(false);
	}

	/**
	 * Cancel add new issue
	 * @return {null}
	 */
	const handleClickCancel = () => {
		setShowIssueWindow(false);
	}

	return(
		<div className="newIssue">
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>New Issue</legend>
					<input name="newIssue" id="newIssue" type="number" min="1" defaultValue="1" className="input" ref={issueNumber}/>
					<button className="loginForm__button addIssue__button" type="submit">Add</button>
					<button className="loginForm__button btnIssue" type="button" onClick={handleClickCancel}>Cancel</button>
				</fieldset>
			</form>
		</div>
	)
}

export default NewIssue;