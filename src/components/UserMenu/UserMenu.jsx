import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Link, LogOutBtn, UserBox, UserEmail } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserBox>
      <Link to="/contacts">Contacts</Link>
      <UserEmail>{user.email}</UserEmail>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </LogOutBtn>
    </UserBox>
  );
};
