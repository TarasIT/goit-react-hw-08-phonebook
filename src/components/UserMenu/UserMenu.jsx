import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Link, LogOutBtn, UserBox, UserEmail } from './UserMenu.styled';
import { Loader } from 'components/Loader/Loader';
import { selectIsLoading } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const { user } = useAuth();

  return (
    <UserBox>
      <Link to="/contacts">Contacts</Link>
      <UserEmail>{user.email}</UserEmail>
      {isLoading && <Loader />}
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </LogOutBtn>
    </UserBox>
  );
};
