import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

type Tsize = 'large' | 'medium' | 'small' | 'xsmall';

interface Props {
  src: string;
  size: Tsize;
}

const handleSizeType = (size: Tsize) => {
  switch (size) {
    case 'large':
      return 'width: 150px; height:150px; font-size: 70px;';
    case 'medium':
      return 'width: 100px; height:100px;font-size: 45px;';
    case 'small':
      return 'width: 70px; height:70px;font-size: 30px;';
    case 'xsmall':
      return 'width: 45px; height:45px;font-size: 20px;';
  }
};

const AvatarWrapper = styled.div<{ size: Tsize }>`
  ${(props) => handleSizeType(props.size)}

  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  border: 2px solid #fff;
  background: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Avatar = ({ src, size }: Props): JSX.Element => {
  return (
    <AvatarWrapper size={size}>
      {src ? <img src={src} alt="avatar" /> : <FaUser />}
    </AvatarWrapper>
  );
};

export default Avatar;
