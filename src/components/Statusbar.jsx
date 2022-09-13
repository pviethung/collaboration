import { useFirestore } from 'hooks/useFirestore';
import { useEffect } from 'react';
import { Flex } from 'styles/common';
import Avatar from './Avatar';
import { StyledStatusbar } from './Statusbar.styles';

const Statusbar = () => {
  console.count('[Component <Statusbar/> rendered] ');
  const { onSnapshotDocument: onUsersChange, collectionData: users } =
    useFirestore('users');

  useEffect(() => {
    const unsub = onUsersChange();
    return () => unsub();
  }, [onUsersChange]);

  if (!users) {
    return <></>;
  }

  return (
    <StyledStatusbar>
      <h4>Online</h4>
      <ul>
        {users.map((user) => (
          <Flex
            key={user.id}
            as="li"
            alignItems="center"
            justifyContent="flex-end"
          >
            <span></span>
            <p>{user.displayName}</p>
            <Avatar photoURL={user.photoURL} />
          </Flex>
        ))}
      </ul>
    </StyledStatusbar>
  );
};
export default Statusbar;
