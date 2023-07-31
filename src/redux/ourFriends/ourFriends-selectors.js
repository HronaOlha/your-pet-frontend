export const getAllFriends = ({ friends }) => friends.items;
export const loading = ({ friends }) => friends.isLoading;
export const isError = ({ friends }) => friends.error;
