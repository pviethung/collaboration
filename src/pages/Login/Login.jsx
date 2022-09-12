import { Button, Column, Container, Error, Flex, Form } from 'styles/common';
import { StyledLogin } from './styles';
import { ReactComponent as LogoCheckbox } from 'assets/checbox.svg';
import { ReactComponent as LogoCheckboxOutline } from 'assets/checkbox-outline.svg';
import LoginIllustration from 'assets/illustration_login.png';
import { Link } from 'react-router-dom';
import { useLogin } from 'hooks/useLogin';
import { useRef } from 'react';

const Login = () => {
  console.count('[Component <Login/> rendered] ');
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, isError, error } = useLogin();

  const loginHandler = (e) => {
    e.preventDefault();
    login(emailRef.current.value, passwordRef.current.value);
  };
  return (
    <Container>
      <StyledLogin>
        <Flex>
          <Column>
            <h3>Hi, Welcome Back</h3>
            <img src={LoginIllustration} alt="" />
          </Column>
          <Column>
            <Form onSubmit={loginHandler}>
              <div className="form-desc">
                <h4>Sign in to Collaboration</h4>
                <p>Enter your details below</p>
              </div>
              {isError && <Error>{error.message}</Error>}
              <div className="form-group">
                <input ref={emailRef} type="email" />
                <label>Email address</label>
              </div>
              <div className="form-group">
                <input ref={passwordRef} type="password" />
                <label>Password</label>
              </div>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                className="form-checkbox-wrap"
              >
                <div className="form-checkbox">
                  <input id="remember-account" type="checkbox" />
                  <LogoCheckboxOutline />
                  <LogoCheckbox />
                  <label htmlFor="remember-account">Remember me</label>
                </div>

                <a href="/">Forgot password?</a>
              </Flex>
              <Button>Login</Button>
              <div className="form-redirect">
                Don't have a account?
                <Link to="/signup">Get started</Link>
              </div>
            </Form>
          </Column>
        </Flex>
      </StyledLogin>
    </Container>
  );
};
export default Login;
