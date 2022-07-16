import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const DataLoadingWrapper = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => props.height}px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const DataLoading = ({ height }: any): JSX.Element => {
  return (
    <DataLoadingWrapper height={height}>
      <CircularProgress />
    </DataLoadingWrapper>
  );
};

export default DataLoading;
