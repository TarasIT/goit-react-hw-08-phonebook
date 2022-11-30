import { useAuth } from 'hooks/useAuth';
import { Helmet } from 'react-helmet';
import { HomePage, NotAuthTitle, Title } from './Home.styled';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HomePage>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Title>
        Welcome to your personal phonebook!
        {!isLoggedIn && (
          <NotAuthTitle>
            {' '}
            Please, regist or log in to start working with your contacts!
          </NotAuthTitle>
        )}
      </Title>
    </HomePage>
  );
};

export default Home;
