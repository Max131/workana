import {useState, useRef} from "react";

const NewIssue = ({setShowIssueWindow, setState, data, users}) => {
	
	const issueNumber = useRef(null)
	let issueExist = false;
	const handleSubmit = (e) => {
		e.preventDefault();
		issueExist = !data.data.every(issue => issue.issue !== +issueNumber.current.value);
	
		!issueExist && setState({...data, data: [...data.data, {
    						issue: +issueNumber.current.value,
    						validVotes: [1, 2, 3, 5, 8, 13, 20, 40, "?"],
						    members: [...users]
  						}
					]});

		!issueExist && setShowIssueWindow(false);
	}

	const handleClickCancel = () => {
		setShowIssueWindow(false);
	}

	const IssueExists = () => {
		return (
			<p className="issueExists">The issue already exists</p>
		);
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