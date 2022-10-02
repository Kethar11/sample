import { useState } from 'react';
import Dashboard from '../components';
import LoadingScreen from '../components';


const LandingPage = () => {

    const [loading, setLoading] = useState(true);

    const loadinghandle = (props) => {
        setLoading(props);
    }
    return (
        <div className="App">
            {loading ? <LoadingScreen Loading={loadinghandle} /> : <Dashboard />}
        </div>
    )

}

export default LandingPage;