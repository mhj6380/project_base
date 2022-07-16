import styled from "styled-components";

const DocumentPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
`;

interface Props {}

const DocumentPage: React.FC<Props> = ({}) => {
  return <DocumentPageWrapper></DocumentPageWrapper>;
};

export default DocumentPage;
