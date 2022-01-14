import { useDispatch } from 'react-redux';
import {
  editPassword,
  EditPasswordData,
  editUser,
  EditUserData,
  fetchUserById,
} from 'modules/user';
import { navigate } from '@reach/router';
import { Routes } from 'fixtures';

export const useUser = () => {
  const dispatch = useDispatch();

  const fetchUser = () => {
    dispatch(fetchUserById());
  };
  const editUserData = (editData: EditUserData) => {
    dispatch(editUser(editData));
    navigate(Routes.Profile);
  };
  const editUserPassword = (editData: EditPasswordData) => {
    dispatch(editPassword(editData));
    navigate(Routes.Profile);
  };

  return {
    fetchUser,
    editUserData,
    editUserPassword,
  };
};
