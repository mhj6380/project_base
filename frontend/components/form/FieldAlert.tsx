import styled from 'styled-components';

const FieldAlertWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  font-size: 13px;
  color: grey;

  .question {
    font-size: 10px;
    display: inline-block;
    width: 20px;
    height: 20px;
    color: #ffffff;
    background: #2d93d3;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-item: center;
    margin-right: 8px;
    padding-top: 2px;
  }
`;

interface Props {
  text: string;
}

const FieldAlert = ({ text }: Props): JSX.Element => {
  return (
    <FieldAlertWrapper>
      <span className="question">?</span>
      {text}
    </FieldAlertWrapper>
  );
};

export default FieldAlert;
