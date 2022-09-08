import styled from 'styled-components';

const LoginStyle = styled.div`
  color: red;
`;

const Login = () => {
  console.count('[Component <Login/> rendered] ');
  return <LoginStyle>Login</LoginStyle>;
};
export default Login;
