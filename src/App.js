
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Contact from './pages/contact';
import LandingPage from './pages/dashboard';
import ErrorPage from './pages/Error';
import Home from './pages/home';
import Services from './pages/services';
import Speciality from './pages/speciality';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/speciality" element={<Speciality />} />
      <Route path="/contact" element={<Contact />} />
    </Route>

  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
