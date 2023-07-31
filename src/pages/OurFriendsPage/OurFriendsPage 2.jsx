import { useEffect } from "react";
import FriendsList from "../../modules/ourFriends/components/friendsList/FliendsList";
import { useDispatch, useSelector } from "react-redux";
import getFriends from "../../redux/ourFriends/ourFriends-operations";
import {
  getAllFriends,
  loading,
} from "../../redux/ourFriends/ourFriends-selectors";
import NotFound from "../../pages/NotFoundPage/NotFound";
const OurFriends = () => {
  const dispatch = useDispatch();
  const friends = useSelector(getAllFriends);
  const isLoading = useSelector(loading);
  useEffect(() => {
    dispatch(getFriends());
  }, []);
  return (
    <>
      {isLoading && <div>Loading</div>} <FriendsList />
    </>
  );
};
export default OurFriends;
