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
    await fetch("https://todos-9a65.restdb.io/rest/issues", {
            headers: {
                  "x-apikey": "60f158b149cd3a5cfbd2291f",
                  "Cache-Control": "no-cache",
                  "content-type": "application/json"
              }
            })
          .then(res => res.json())
          .then(data => {
                  if(data.message) throw data.message
                  setApiData({data, isLoading: false})
                })
          .catch(error => setApiData({isLoading: false, error: error.message, data: null}));
  }

  /**
   * Get users from API and set the user state
   * @return {null}
   */
  const getUsers = async () => {
      await fetch("https://todos-9a65.restdb.io/rest/pusers", {
            headers: {
                  "x-apikey": "60f158b149cd3a5cfbd2291f",
                  "Cache-Control": "no-cache",
                  "content-type": "application/json"
              }
            })
            .then(res => res.json())
            .then(users => setUsers(users))
            .catch(error => console.log("Error: ",error));
  }
  /**
   * Connect to API realtime server for data changes and load the new data
   * @return {null}
   */
  const updateOnServerChanges = () => {
    let serverEvent = new EventSource("https://todos-9a65.restdb.io/realtime?apikey=60f158b149cd3a5cfbd2291f");
    serverEvent.addEventListener('put', (e) => {
      console.log(e.data);
      getData();
    }, false);
    serverEvent.addEventListener('post', (e) => {
      console.log(e.data);
      getData();
    }, false);

    window.addEventListener('beforeunload', () => serverEvent.close());
  }

  /**
   * Get app data & users on component mount
   * @return {null}
   */
  useEffect(() => {
    getData();
    getUsers();
    updateOnServerChanges();
    
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
          <Login users={users} state={apiData} setState={setApiData} setLogin={setLogin} setIssue={setCurrentIssue} />
        )
    )
  );
};
export default App;
