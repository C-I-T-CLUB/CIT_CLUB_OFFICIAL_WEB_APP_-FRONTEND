import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Login from "./pages/Login";
import NewEvent from "./pages/NewEvent";
import OurTeam from "./pages/OurTeam";
import Registration from "./pages/Registration";
import SignUp from "./pages/SignUp";
import Blogs from "./pages/Blogs";
import FindDeveloper from "./pages/FindDeveloper";
import Gallary from "./pages/Gallary";
import PastPapers from "./pages/PastPapers";
import Resources from "./pages/Resources";
import TechNews from "./pages/TechNews";
import Projects from "./pages/Projects";
import TechInterviews from "./pages/TechInterviews";
import  Axios  from 'axios';
import Auth from './hooks/auth'
import { ProtectedRoute } from "./components/ProtectedRouteWrapper";
function App() {
  const auth = Auth
  Axios.defaults.headers = {
    Authorization: `Bearer ${auth.getToken()}`
  }
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="/Event" element={<Event />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/NewEvent" element={<NewEvent />} />
            <Route path="/OurTeam" element={<OurTeam />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Resources" element={ <Resources />} />
            <Route path="/Resources/Blogs" element={<Blogs />} />
            <Route path="/Resources/Projects" element={<Projects />} />
            <Route path="/Gallary" element={<Gallary />} />
            <Route path="/Resources/PastPapers" element={<ProtectedRoute children={ <PastPapers />} /> } />
            <Route path="/Resources/TechNews" element={<TechNews />} />
            <Route path="/Resources/TechInterviews" element={<TechInterviews />} />
            <Route path="/FindDeveloper" element={<FindDeveloper />} />
        </Routes>
    </>
  );
}

export default App;
