import { Helmet } from 'react-helmet';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { RegistrationPage } from './Registartion.styled';

const Regist = () => {
  return (
    <RegistrationPage>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </RegistrationPage>
  );
};

export default Regist;
