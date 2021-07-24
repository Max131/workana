import "./main.css";
import { useState, useEffect } from "react";
import Data from "./db.json";
import Users from "./users.json";
//
import Loader from "./Components/Loader";
import Login from "./Components/Login.jsx";
import Workana from "./Components/Workana";

const App = () => {

  //App State Start
  //Default state with all the data
  const [state, setState] = useState({
    isLoading: true,
    error: null,
    data: [],
  });
  //Users geted from an API
  const [users, setUsers] = useState([]);

  //Login state
  const [loginUser, setLoginUser] = useState({
    id: null, 
    name: null,
  });

  //Current Issue state
  const [currentIssue, setCurrentIssue] = useState(null);
  //App State End
  

  //Set the current login id & name
  const setLogin = ({id, name}) => {
    setLoginUser({id, name});
  };

  //Set the current Issue
  const setIssue = (issue) => {
    setCurrentIssue(issue);
  };

  useEffect(() => {
    //On mount get data from API
    const getData = async () => {
      await fetch("https://ppoker-5ad4.restdb.io/rest/issues",{
              headers: {
                    "x-apikey": "60f8824d49cd3a5cfbd22ad6",
                    "Cache-Control": "no-cache",
                    "content-type": "application/json"
                }
              })
            .then(res => res.json())
            .then(data => setState({data, isLoading: false}))
            .catch(error => setState({isLoading: false, error: error.message, data: null}));
    }
    //getData();

    //On mount get users from API
    const getUsers = async () => {
      await fetch("https://api.jsonbin.io/b/60fb5e0fa917050205cecfa2/latest")
            .then(res => res.json())
            .then(users => console.log("Users: ", users))
            .catch(error => console.log("Error: ",error));
    }
    //getUsers();

    setState({data: Data, isLoading: false})
    setUsers(Users);
  }, []);
  return (
    //Check if data is loaded to mount the App or still loading
    state.isLoading ? (
      <Loader />
    ) : (
      loginUser.id? (
          <Workana data={currentIssue} user={loginUser} error={state.error} setLogin={setLogin} issue={currentIssue}/>
        ): (
          <Login users={Users.users} state={state} setState={setState} setLogin={setLogin} setIssue={setIssue} />
        )
    )
  );
};
export default App;
