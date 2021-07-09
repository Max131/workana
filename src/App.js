import 'bulma/css/bulma.min.css';
import 'bulma-pageloader/dist/css/bulma-pageloader.min.css';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Workana from './Components/Workana';

const App = () =>{
  const [state, setState] = useState({isLoading: true, erros: null, data: {}})

  useEffect( () => {
    const fetchData =  () => {
      axios.get('https://my-json-server.typicode.com/max131/workana/db')
        .then(res => setState({data: res.data, isLoading: false}))
        .catch(error => setState({ error, isLoading: false }));
    }
    fetchData();
  },[]);

  return(
    state.isLoading 
      ?(<div className="pageloader is-active"><span className="title">Cargando...</span></div>) 
      :(<Workana data={state.data} />)
  );
}
export default App;