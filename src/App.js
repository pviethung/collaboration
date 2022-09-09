import Signup from 'pages/Signup/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'styles';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  console.count('[Component </App> rendered] ');
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;

// signup
// login
// home / dashboard
// new project
// project detail

//leftsidebar
//rightsidebar
