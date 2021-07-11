import { useState } from "react";
import PlannerCard from "./PlannerCard";
import PlannerIssues from "./PlannerIssues";
import PlannerUser from "./PlannerUser";
import Error from "./Error.jsx";

function Workana({ data, error }) {
  //Set the global state geted from App component
  const [globalState, setGlobalState] = useState({ ...data });

  //Function to toggle votes
  const emitVote = (cardValue) => {
    const currentUser = globalState.members[0];
    currentUser.vote = currentUser.vote === cardValue ? false : cardValue;
    setGlobalState({ ...globalState }, currentUser);
  };

  return (
    //Error handler in case if we got an error
    !error ? (
      <>
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
              currentVote={globalState.members[0].vote}
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
          {globalState.members.map((member, index) => (
            <PlannerUser user={member} key={index} />
          ))}
        </div>
      </>
    ) : (
      <Error error={error} />
    )
  );
}

export default Workana;
