import PropTypes from 'prop-types';
import friends from './friends.json';
import { List, Item, Status, Name } from './FriendListElements';

export const FriendList = () => {
  return (
    <List variant="list">
      {friends.map(friend => (
        <Item variant="item" key={friend.id}>
          <Status variant="status" isOnline={friend.isOnline}></Status>
          <img height="80px" src={friend.avatar} alt="User avatar" />

          <Name variant="name">{friend.name}</Name>
        </Item>
      ))}
    </List>
  );
};
FriendList.propTypes = {
  friend: PropTypes.shape({
    variant: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
