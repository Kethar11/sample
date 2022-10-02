
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import LandingPage from './pages/dashboard';
import ErrorPage from './pages/Error';
import Services from './pages/services';
import Speciality from './pages/speciality';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  errorElement={<ErrorPage />}>
     <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/speciality" element={<Speciality />}/>
      </Route>
     
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
