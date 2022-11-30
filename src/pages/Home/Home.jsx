import { useAuth } from 'hooks/useAuth';
import { HomePage, NotAuthTitle, Title } from './Home.styled';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HomePage>
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
