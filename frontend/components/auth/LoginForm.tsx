import styled from "styled-components";

const LoginFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
`;

interface Props {}

const LoginForm: React.FC<Props> = ({}) => {
  return <LoginFormWrapper></LoginFormWrapper>;
};

export default LoginForm;
