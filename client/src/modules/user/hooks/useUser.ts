import { User } from 'models/user';
import { selectAuth } from 'modules/auth';
import { fetchAllUsers, selectAllUsers } from 'modules/user';
import { useDispatch, useSelector } from 'react-redux';

export const useUser = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(selectAllUsers);
  const auth = useSelector(selectAuth);
  const getAllUsers = (token: string) => {
    dispatch(fetchAllUsers(token));
  };

  const getUserById = () => {
    const user = allUsers.find((user) => user._id === auth.data.userId);
    console.log('user by id', user);
    return user as User;
  };

  return {
    getAllUsers,
    getUserById,
  };
};
