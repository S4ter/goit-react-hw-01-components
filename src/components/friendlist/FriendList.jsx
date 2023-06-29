import friends from 'components/friendlist/friends.json';

export const FriendList = test => (
  <ul class="friend-list">
    {friends.map(test => (
      <li class="item" key={test.id}>
        <span class="status">{test.isOnline}</span>
        <img class="avatar" src={test.avatar} alt="User avatar" width="48" />
        <p class="name">{test.name}</p>
      </li>
    ))}
  </ul>
);
