import Home from "./pages/Home/home"
import Login from "./pages/Login/login"
import Register from "./pages/Register/register"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
//styled components
import {StyledContainer} from './components/Styles'

import background from './bg.png';

import {useMediaQuery} from 'react-responsive';

 //loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

//route
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {

  return (
    <Router>
    <Navbar />
    <StyledContainer style={{backgroundImage: `url(${background})`, backgroundSize: "cover", opacity: 0.9}}>
     <div className="App">
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
     </div>
    </StyledContainer>
    <Footer/>
    </Router>
  );
}

export default App;

