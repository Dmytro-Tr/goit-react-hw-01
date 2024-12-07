import "./App.css";
import userData from "./userData.json";
import Profile from "./components/Profile/Profile";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList";
import items from "./TransactionHistory.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </>
  );
};

export default App;
