import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginPage } from './Login.styled';

const Login = () => {
  return (
    <LoginPage>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </LoginPage>
  );
};

export default Login;
