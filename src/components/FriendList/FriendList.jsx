import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={styles.list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id}>
            <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
