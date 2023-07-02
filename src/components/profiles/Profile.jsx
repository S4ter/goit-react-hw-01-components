import PropTypes from 'prop-types';
import user from 'components/profiles/user.json';
import {
  ProfileContainter,
  Description,
  AvatarBackground,
  UserName,
  UserTag,
  UserLocation,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsQuantity,
} from './ProfileElements';
export const Profile = () => {
  return (
    <ProfileContainter variant="profile">
      <Description variant="description">
        <AvatarBackground variant="avatar_background">
          <img src={user.avatar} alt="User avatar" width="100px" />
        </AvatarBackground>
        <UserName variant="name"> {user.username}</UserName>
        <UserTag variant="tag">@{user.tag} </UserTag>
        <UserLocation variant="location"> {user.location}</UserLocation>
      </Description>
      <StatisticsList variant="stats">
        <StatisticsItem variant="item">
          <StatisticsLabel variant="label">Followers: </StatisticsLabel>
          <StatisticsQuantity variant="quantity">
            {user.stats.followers}
          </StatisticsQuantity>
        </StatisticsItem>
        <StatisticsItem variant="item">
          <StatisticsLabel variant="label">Views: </StatisticsLabel>
          <StatisticsQuantity variant="quantity">
            {user.stats.views}
          </StatisticsQuantity>
        </StatisticsItem>
        <StatisticsItem variant="item">
          <StatisticsLabel variant="label">Likes: </StatisticsLabel>
          <StatisticsQuantity variant="quantity">
            {user.stats.likes}
          </StatisticsQuantity>
        </StatisticsItem>
      </StatisticsList>
    </ProfileContainter>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }),
};
