import {useState, useEffect} from 'react';
/* Using Bulma framework */
import 'bulma/css/bulma.min.css';
import './App.css';
import PlannerCard from './Components/PlannerCard';
import PlannerIssues from './Components/PlannerIssues';
import PlannerUser from './Components/PlannerUser';
/* Import data from a file */
import Data from './db.json';
import axios from 'axios';


function App() {
  const [globalState, setGlobalState] = useState(Data);
  /* Fetch the Data Api */
  useEffect( () => {
    const fetchData = async () => {
      const data = await axios('https://my-json-server.typicode.com/max131/workana');
      setGlobalState({...data});
    }
  },[]);

  /* Function to toggle votes */
  const emitVote = (cardValue) => {
    const currentUser = globalState.members[0];
    currentUser.vote = currentUser.vote === cardValue? false: cardValue;
    setGlobalState({...globalState}, currentUser);
  };

  return (
    <>{/* Just a header */}
      <div className="App hero is-dark is-bold">
        <header className="App-header hero-body">
          <div className="container has-text-centered">
            <h1 className="title mb-0">Planning Poker</h1>
            <h2 className="is-size-1 has-text-weight-bold">Workana</h2>
            <p className="subtitle">Hiring challenge</p>
          </div>
        </header>
      </div>
      <div className="section container mb-0 pb-0 px-6">
        <div className=" columns is-multiline is-mobile is-centered is-vcentered">

          {/* Load every card component */}
          {globalState.validVotes.map(cardValue => (
            <PlannerCard 
              value={cardValue} 
              currentVote = {globalState.members[0].vote} 
              emitVote={emitVote} 
              key={cardValue} />
            )
          )}
        </div>
      </div>
      <div className="section is-small container pb-0 my-0 ">
        <div className="columns is-centered is-mobile">
          <div className="column is-full-mobile is-6-tablet">

            {/* Load the issue component */}
            <PlannerIssues numUsers={globalState.members.length} issue={globalState.issue} />
          </div>
        </div>
      </div>
      <div className="section container">
        <div className="columns is-centered is-vcentered is-mobile">
          <div className="column is-full-mobile is-half-tablet">

            {/* Load the users */}
            {globalState.members.map((member, index) => <PlannerUser user={member} key={index}/>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
