import "./main.css";
import { useState, useEffect } from "react";

//Test data
//import Data from "./db.json";
//import Users from "./users.json";

import Loader from "./Components/Loader";
import Login from "./Components/Login";
import Workana from "./Components/Workana";
/**
 * App component
 * @return {null} 
 */
const App = () => {

  //App State Start
  //Default state with all the data
  const [apiData, setApiData] = useState({
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

  /**
   * Get data from API and set the App state
   * @return {null} 
   */
  const getData = async () => {
    await fetch("https://ppoker-5ad4.restdb.io/rest/issues",{
            headers: {
                  "x-apikey": "60f8824d49cd3a5cfbd22ad6",
                  "Cache-Control": "no-cache",
                  "content-type": "application/json"
              }
            })
          .then(res => res.json())
          .then(data => setApiData({data, isLoading: false}))
          .catch(error => setApiData({isLoading: false, error: error.message, data: null}));
  }

  /**
   * Get app data & users on component mount
   * @return {null}
   */
  useEffect(() => {
    //On mount get data from API
    getData();

    //On mount get users from API
    const getUsers = async () => {
      await fetch("https://api.jsonbin.io/b/60fb5e0fa917050205cecfa2/latest")
            .then(res => res.json())
            .then(users => setUsers(users))
            .catch(error => console.log("Error: ",error));
    }
    getUsers();

    //Set test data
    //setApiData({data: Data, isLoading: false})
    //setUsers(Users);
  }, []);

  return (
    //Check if data is loaded to mount the App or still loading
    apiData.isLoading ? (
      <Loader />
    ) : (
      //Check if a user is logged in to load de main component or load de login component
      loginUser.id? (
          <Workana data={currentIssue} user={loginUser} error={apiData.error} setLogin={setLogin} issue={currentIssue}/>
        ) : (
          <Login users={users.users} state={apiData} setState={setApiData} setLogin={setLogin} setIssue={setCurrentIssue} />
        )
    )
  );
};
export default App;
