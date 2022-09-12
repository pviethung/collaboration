import Layout from 'components/Layout';
import { useAuthContext } from 'hooks/useAuthContext';
import Create from 'pages/Create/Create';
import Login from 'pages/Login/Login';
import Signup from 'pages/Signup/Signup';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'styles';
import Home from './pages/Home';

const App = () => {
  console.count('[Component </App> rendered] ');
  const { user } = useAuthContext();
  console.log(user);
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route path="/create" element={<Create />} />
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
