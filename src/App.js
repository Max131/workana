import "./main.css";
import { useState, useEffect } from "react";
//import axios from "axios";
import data from "./db.json";
import users from "./users.json";
//
import Loader from "./Components/Loader";
import Login from "./Components/Login.jsx";
import Workana from "./Components/Workana";

const App = () => {
  const [state, setState] = useState({
    isLoading: true,
    error: null,
    data: {},
  });
  const [loginUser, setLoginUser] = useState({
    id: null, 
    name: null,
  });
  const setLogin = ({_id, name}) => {
    setLoginUser({id: _id, name});
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
    
    setState({data: data, isLoading: false})

  }, []);

  return (
    //Check if data is loaded to mount the App or still loading
    state.isLoading ? (
      <Loader />
    ) : (
      loginUser.id? (
          <Workana data={state.data} user={loginUser} error={state.error} setLogin={setLogin} />
        ): (
          <Login users={users.users} data={data} setLogin={setLogin} />
        )
    )
  );
};
export default App;
