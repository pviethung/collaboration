import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useAuthContext } from 'hooks/useAuthContext';
import { useFirestore } from 'hooks/useFirestore';
import { useEffect } from 'react';
import { Flex } from 'styles/common';
import Avatar from './Avatar';
import { StyledStatusbar } from './Statusbar.styles';

const Statusbar = () => {
  console.count('[Component <Statusbar/> rendered] ');
  const { user: currentUser } = useAuthContext();
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
        {users.map((user) => {
          return (
            <Flex
              key={user.id}
              as="li"
              alignItems="center"
              justifyContent="flex-end"
            >
              {user.online ? (
                <span className="online"></span>
              ) : (
                <span className="offline">
                  {formatDistanceToNow(new Date(user.lastSignInTime), {
                    addSuffix: true,
                  })}
                </span>
              )}
              <p>{user.displayName}</p>
              <Avatar photoURL={user.photoURL} />
            </Flex>
          );
        })}
      </ul>
    </StyledStatusbar>
  );
};
export default Statusbar;
