import { Button, Column, Container, Error, Flex, Form } from 'styles/common';
import { StyledSignup } from './styles';
import { ReactComponent as LogoCheckbox } from 'assets/checbox.svg';
import { ReactComponent as LogoCheckboxOutline } from 'assets/checkbox-outline.svg';
import LoginIllustration from 'assets/illustration_singup.png';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useSignup } from 'hooks/useSignup';

const Signup = () => {
  console.count('[Component <Signup/> rendered] ');
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup, isError, error } = useSignup();

  const submitHandler = (e) => {
    e.preventDefault();
    signup(
      emailRef.current.value,
      passwordRef.current.value,
      firstNameRef.current.value,
      lastNameRef.current.value
    );
  };
  return (
    <Container>
      <StyledSignup>
        <Flex>
          <Column className="layout-col">
            <h3>Manage the job more effectively with Minimal</h3>
            <img src={LoginIllustration} alt="" />
          </Column>
          <Column className="layout-col">
            <Form onSubmit={submitHandler}>
              <div className="form-desc">
                <h4>Get started absolutely free.</h4>
                <p>Free forever. No credit card needed.</p>
              </div>
              {isError && <Error>{error.message}</Error>}
              <div className="form-group">
                <Flex
                  gap="15px"
                  justifyContent="space-between"
                  className="form-"
                >
                  <Column width="1/2">
                    <div className="form-group">
                      <input required type="text" ref={firstNameRef} />
                      <label>First name</label>
                    </div>
                  </Column>
                  <Column width="1/2">
                    <div className="form-group">
                      <input required type="text" ref={lastNameRef} />
                      <label>Last name</label>
                    </div>
                  </Column>
                </Flex>
              </div>

              <div className="form-group">
                <input required type="email" ref={emailRef} />
                <label>Email address</label>
              </div>
              <div className="form-group">
                <input required type="password" ref={passwordRef} />
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
      </StyledSignup>
    </Container>
  );
};
export default Signup;
