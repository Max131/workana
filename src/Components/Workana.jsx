import { useState } from "react";
import PlannerCard from "./PlannerCard";
import PlannerIssues from "./PlannerIssues";
import PlannerUser from "./PlannerUser";
import Error from "./Error.jsx";
import Logout from "./Logout";

const Workana = ({ data, error, user, setLogin }) => {
  //Set the global state geted from App component
  //console.log(data[0]);
  //const [indexCurrentIssue] = data.filter(item => item.issue === issue);
  //console.log(indexCurrentIssue);
  //data.forEach(item => console.log(item.issue, issue));

  const [globalState, setGlobalState] = useState({ ...data });
  const indexCurrentUser = globalState.members.findIndex(
    (item) => item._id === user.id
  );
  const currentUser = globalState.members[indexCurrentUser];

  //Function to toggle votes
  const emitVote = (cardValue) => {
    currentUser.vote = currentUser.vote === cardValue ? false : cardValue;
    setGlobalState({ ...globalState }, currentUser);
  };

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
          {globalState.members.map((member, index) => (
            <PlannerUser user={member} current={currentUser} key={index} />
          ))}
        </div>
      </>
    ) : (
      <Error error={error} />
    )
  );
};

export default Workana;
