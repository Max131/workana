import {useRef} from "react";

const NewIssue = ({setShowIssueWindow, setState, data, users}) => {
	
	const issueNumber = useRef(null)

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
			await fetch("https://ppoker-5ad4.restdb.io/rest/issues", {
									method: "POST",
									headers: {
										"x-api-key": "60f8824d49cd3a5cfbd22ad6",
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