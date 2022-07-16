import styled from 'styled-components';

export const Title = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
`;
export const ViewWrapper = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 10px;
  background: #f5f5f5;
`;
export const LoginFormWrapper = styled.div`
  position: relative;
  width: 500px;
  height: auto;
  // background: white;
  border-radius: 5px;
  padding: 60px 25px;
  @media (min-width: 768px) {
    padding: 80px 40px;
  }
  @media (min-width: 1024px) {
    padding: 90px 60px;
  }
`;

export const NoAccount = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  bottom: -35px;
  left: 0;
`;

export const CheckboxWrapper = styled.div`
  font-size: 14px;
  input {
    margin-left: 6px;
    position: relative;
    top: 2px;
  }
  .parent-section {
    font-weight: 700;
  }
  .child-section {
    width: 100%;
    position: relative;
    padding-left: 10px;
    a {
      position: absolute;
      right: 0;
      color: grey;
    }
  }
`;

export const ForgotPassword = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

export const FieldWrapper = styled.div`
  width: 100%;
  padding: 5px;
  margin-bottom: 15px;
`;

export const SubmitBtn = styled.button`
  box-shadow: none;
  border: none;
  width: 100%;
  line-height: 45px;
  background: #49a2e3;
  color: #fff;
  font-size: 16px;
  margin-top: 30px;
  border-radius: 5px;
  @media (min-width: 768px) {
    font-size: 17px;
  }
  @media (min-width: 1024px) {
    line-height: 50px;
    font-size: 18px;
  }
`;

export const GraySubmitBtn = styled.button`
  box-shadow: none;
  border: none;
  width: 100%;
  line-height: 45px;
  background: #959595;
  color: #fff;
  font-size: 16px;
  margin-top: 15px;
  border-radius: 5px;

  @media (min-width: 768px) {
    font-size: 17px;
  }
  @media (min-width: 1024px) {
    line-height: 50px;
    font-size: 18px;
  }
`;

export const ValidationAlert = styled.div`
  color: red;
  font-size: 13px;
  position: relative;
  top: -15px;
  padding-left: 10px;
`;
const Default = styled.div`
  color: red;
  font-size: 13px;
  position: relative;
  top: -15px;
  padding-left: 10px;
`;

export default Default;
