import styled from "styled-components";
import { Skeleton as AntdSkeleton } from "antd";
const SkeletonWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

interface Props {
  type: string;
}

const Skeleton: React.FC<Props> = ({ type }) => {
  return (
    <SkeletonWrapper>
      {type === "feed" && (
        <>
          <AntdSkeleton active />
          <AntdSkeleton.Input active style={{ width: 320, height: 500 }} />
        </>
      )}
    </SkeletonWrapper>
  );
};

export default Skeleton;
