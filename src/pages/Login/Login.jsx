import { Button, Column, Container, Flex, Form } from 'styles/common';
import { StyledLogin } from './styles';
import { ReactComponent as LogoCheckbox } from 'assets/checbox.svg';
import { ReactComponent as LogoCheckboxOutline } from 'assets/checkbox-outline.svg';
import LoginIllustration from 'assets/illustration_login.png';

const Login = () => {
  console.count('[Component <Login/> rendered] ');
  return (
    <Container>
      <StyledLogin>
        <Flex alignItems="center">
          <Column>
            <h3>Hi, Welcome Back</h3>
            <img src={LoginIllustration} alt="" />
          </Column>
          <Column>
            <Form>
              <div className="form-desc">
                <h4>Sign in to Collaboration</h4>
                <p>Enter your details below</p>
              </div>
              <div className="form-group">
                <input type="email" />
                <label>Email address</label>
              </div>
              <div className="form-group">
                <input type="password" />
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
                <a href="/">Get started</a>
              </div>
            </Form>
          </Column>
        </Flex>
      </StyledLogin>
    </Container>
  );
};
export default Login;
