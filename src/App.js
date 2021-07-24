import "./main.css";
import { useState, useEffect } from "react";
//import Data from "./db.json";
//import users from "./users.json";
//
import Loader from "./Components/Loader";
import Login from "./Components/Login.jsx";
import Workana from "./Components/Workana";

const App = () => {

  //App State Start
  const [state, setState] = useState({
    isLoading: true,
    error: null,
    data: [],
  });

  const [users, setUsers] = useState([]);

  const [loginUser, setLoginUser] = useState({
    id: null, 
    name: null,
  });
  const [currentIssue, setCurrentIssue] = useState(null);
  //App State End
  
  const setLogin = ({_id, name}) => {
    setLoginUser({id: _id, name});
  };

  const setIssue = (issue) => {
    setCurrentIssue(issue);
  };

  //On mount get data from API
  useEffect(() => {
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
    getData();

    const getUsers = async () => {
      await fetch("https://ppoker-5ad4.restdb.io/rest/users",{
              headers: {
                    "x-apikey": "60f8824d49cd3a5cfbd22ad6",
                    "Cache-Control": "no-cache",
                    "content-type": "application/json"
                }
              })
            .then(res => res.json())
            .then(users => console.log("Users: ", users))
            .catch(error => console.log("Error: ",error));
    }
    getUsers();

    //setState({data: Data, isLoading: false})
  }, []);
  return (
    //Check if data is loaded to mount the App or still loading
    state.isLoading ? (
      <Loader />
    ) : (
      loginUser.id? (
          <Workana data={currentIssue} user={loginUser} error={state.error} setLogin={setLogin} issue={currentIssue}/>
        ): (
          <Login users={state.data[0].members} state={state} setState={setState} setLogin={setLogin} setIssue={setIssue} />
        )
    )
  );
};
export default App;
