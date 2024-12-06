import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul>
        {friends.map(({ avatar, name, isOnlined, id }) => (
          <li key={id}>
            <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnlined}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
