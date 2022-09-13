import { StyledAvatar } from './Avatar.styles';

const Avatar = ({ photoURL, displayName }) => {
  console.count('[Component <Avatar/> rendered] ');
  return (
    <StyledAvatar>
      <img src={photoURL} alt="" />
    </StyledAvatar>
  );
};
export default Avatar;
