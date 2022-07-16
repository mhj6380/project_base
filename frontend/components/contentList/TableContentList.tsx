import styled from "styled-components";

const TableContentListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
`;

interface Props {}

const TableContentList: React.FC<Props> = ({}) => {
  return <TableContentListWrapper></TableContentListWrapper>;
};

export default TableContentList;
