import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.card}>
      <div className={styles.box}>
        <img
          src={image}
          alt="User avatar"
        />
        <p className={styles.title}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span className={styles.stats}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={styles.stats}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={styles.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
