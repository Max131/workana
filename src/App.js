import "./main.css";
import { useState, useEffect } from "react";
//import axios from "axios";
import Data from "./db.json";
import users from "./users.json";
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
    /*const fetchData = () => {
      axios
        .get("https://my-json-server.typicode.com/max131/workana/db")
        .then((res) => setState({ data: res.data, isLoading: false }))
        .catch((error) => {
          setState({ isLoading: false, error: error.message, data: null });
        });
    };
    fetchData();*/
    setState({data: Data, isLoading: false})
  }, []);

  return (
    //Check if data is loaded to mount the App or still loading
    state.isLoading ? (
      <Loader />
    ) : (
      loginUser.id? (
          <Workana data={currentIssue} user={loginUser} error={state.error} setLogin={setLogin} issue={currentIssue}/>
        ): (
          <Login users={users.users} data={state.data} setLogin={setLogin} setIssue={setIssue} />
        )
    )
  );
};
export default App;
