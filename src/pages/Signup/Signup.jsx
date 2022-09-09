import { Container, Flex, Form } from 'styles/common';
import { ColLeft } from './styles';

const Signup = () => {
  console.count('[Component <Signup/> rendered] ');
  return (
    <Container>
      <Flex alignItems="center">
        <ColLeft />
        <Form>
          <input type="text" value="dasdsa" />
        </Form>
      </Flex>
    </Container>
  );
};
export default Signup;
