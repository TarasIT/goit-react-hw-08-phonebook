import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <nav>
      <Link to="/registration">Registration</Link>
      <Link to="/login">log In</Link>
    </nav>
  );
};
