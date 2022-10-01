import './App.css';
import { useState } from "react";
import LoadingScreen from './components/loadingScreen';
import Dashboard from './components';

function App() {
  const [loading, setLoading] = useState(true);

  const loadinghandle = (props) => {
    setLoading(props);
  }

  return (
    <div className="App">
      { 
      loading  ? <LoadingScreen Loading ={loadinghandle} /> :
      <Dashboard />
      }
    </div>
  );
}

export default App;
