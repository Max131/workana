import {useState} from 'react';
import PlannerCard from './PlannerCard';
import PlannerIssues from './PlannerIssues';
import PlannerUser from './PlannerUser';

function Workana({data}) {
  //Set the global state geted from App component
  const [globalState, setGlobalState] = useState({...data});

  //Function to toggle votes
  const emitVote = (cardValue) => {
    const currentUser = globalState.members[0];
    currentUser.vote = currentUser.vote === cardValue? false: cardValue;
    setGlobalState({...globalState}, currentUser);
  };

  return (
    <>
      <header className="header">
        <h1 className="header__title">Planning Poker</h1>
        <h2 className="header__branding">Workana</h2>
        <p className="header__subtitle">Hiring challenge</p>
      </header>
      <div className="cards">
        {/* Load the cards component */}
        {
          globalState.validVotes.map(cardValue => (
            <PlannerCard 
              value={cardValue} 
              currentVote = {globalState.members[0].vote} 
              emitVote={emitVote} 
              key={cardValue} />
            ))
        }
      </div>
        {/* Load the issue component */}
        <PlannerIssues numUsers={globalState.members.length} issue={globalState.issue} />
      <div className="users">
        {/* Load the users */}
        {globalState.members.map((member, index) => <PlannerUser user={member} key={index}/>)}
      </div>
    </>
  );
}

export default Workana;
