import { useSelector } from "react-redux";
import { getAllFriends } from "../../../../redux/ourFriends/ourFriends-selectors";
import FriendsItem from "../friendsItem/FriendsItem";
import { FriendsContainer, List } from "./FriendsList.styled";

const FriendsList = () => {
  const friends = useSelector(getAllFriends);

  return (
    <FriendsContainer>
      <h2>Our Friends</h2>
      <List>
        {friends.map((friend) => {
          return <FriendsItem key={friend._id} friend={friend} />;
        })}
      </List>
    </FriendsContainer>
  );
};
export default FriendsList;
