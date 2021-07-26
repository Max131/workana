import { useState, useEffect } from "react";
import PlannerCard from "./PlannerCard";
import PlannerIssues from "./PlannerIssues";
import PlannerUser from "./PlannerUser";
import Error from "./Error.jsx";
import Logout from "./Logout";

/**
 * Main section of the App, the votes are here
 * @param  {object}   options.currentIssue     Current issue data
 * @param  {string}   options.error    Error message
 * @param  {object}   options.user     Current user
 * @param  {function} options.setLogin Function to login current user
 * @return {null}
 */
const Workana = ({ currentIssue, error, user, setLogin }) => {
  //Set issue state
  const [globalState, setGlobalState] = useState({ ...currentIssue });
  //Set if all the members has voted the issue
  const [allHasVoted, setAllHasVoted] = useState(false);
  //Find the curren user
  const indexCurrentUser = globalState.members.findIndex(
    (item) => item.id === user.id
  );
  //Set the current user logged in
  const currentUser = globalState.members[indexCurrentUser];

  /**
   * Function to set user vote
   * @param  {string} cardValue Value of the current voted card
   * @return {null}           
   */
  const emitVote = (cardValue) => {
    currentUser.vote = currentUser.vote === cardValue ? false : cardValue;
    setGlobalState({ ...globalState }, currentUser);
  };

  /**
   * Check if all the memebers has voted on issue state change &
   * Update the API with the new data
   * @return {null}
   */
  useEffect(() => {
    const updateIssue = async () => {
      await fetch(`https://todos-9a65.restdb.io/rest/issues/${globalState._id}`, {
                  method: "PUT",
                  headers: {
                    "x-api-key": "60f158b149cd3a5cfbd2291f",
                    "cache-control": "no-cache",
                    "content-type": "application/json"
                  },
                  body: JSON.stringify(globalState),
                  credentials: "same-origin"})
              .then(res => res.json())
              .then(data => {
                  data.hasOwnProperty("_id")? console.info("Updated vote"): alert (`Error: ${data.message}`)
                })
              .catch(error => alert(error));
    }
    updateIssue();
    setAllHasVoted(globalState.members.every(user => user.vote));
    //console.log(globalState._id);
  },[globalState]);

  return (
    //Error handler in case if we got an error
    !error ? (
      <>
        <Logout doLogout={setLogin} />
        <header className="header">
          <h1 className="header__title">Planning Poker</h1>
          <h2 className="header__branding">Workana</h2>
          <p className="header__subtitle">Hiring challenge</p>
        </header>
        <div className="cards">
          {/* Load the cards component */}
          {globalState.validVotes.map((cardValue) => (
            <PlannerCard
              value={cardValue}
              currentVote={globalState.members[indexCurrentUser].vote}
              emitVote={emitVote}
              key={cardValue}
            />
          ))}
        </div>
        {/* Load the issue component */}
        <PlannerIssues
          numUsers={globalState.members.length}
          issue={globalState.issue}
        />
        <div className="users">
          {/* Load the users */}
          {
            globalState.members.map((member, index) => (
              <PlannerUser user={member} current={currentUser} allHasVoted={allHasVoted} key={index} />
            ))
          }
        </div>
      </>
    ) : (
      <Error error={error} />
    )
  );
};

export default Workana;
