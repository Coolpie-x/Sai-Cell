
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Team from "./component/Team";
import Navbar from "./component/Navbar";
import Revents from "./component/Revents";
import Loading from "./component/Loading";

const App = () => {
 

  return (
    <>
    
    <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Revents />} />
            <Route path="/team" element={<Team />} />
          </Routes>
    </>
        
  );
};

export default App;



