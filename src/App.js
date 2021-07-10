import './main.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from './Components/Loader'; 
import Workana from './Components/Workana';

const App = () =>{
  const [state, setState] = useState({isLoading: true, erros: null, data: {}})
  //On mount get data from API
  useEffect( () => {
    const fetchData =  () => {
      axios.get('https://my-json-server.typicode.com/max131/workana/db')
        .then(res => setState({data: res.data, isLoading: false}))
        .catch(error => setState({ error, isLoading: false }));
    }
    fetchData();
  },[]);

  return(
    //Check if data is loaded to mount the App or still loading
    state.isLoading 
      ?(<Loader />) 
      :(<Workana data={state.data} />)
  );
}
export default App;