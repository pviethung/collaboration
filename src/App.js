import Layout from 'components/Layout';
import Login from 'pages/Login/Login';
import Signup from 'pages/Signup/Signup';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'styles';
import Home from './pages/Home';

const App = () => {
  console.count('[Component </App> rendered] ');
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
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
