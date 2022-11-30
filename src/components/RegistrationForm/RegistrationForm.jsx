import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { Loader } from 'components/Loader/Loader';
import { errorReset } from 'redux/auth/authSlice';
import { regist } from 'redux/auth/operations';
import { selectError, selectIsLoading } from 'redux/auth/selectors';
import {
  Form,
  FormInput,
  FormLabel,
  SubmitBtn,
} from './RegistrationForm.styled';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (error !== null) {
      Notiflix.Notify.info('User with this data is already registered!', {
        width: '500px',
        fontSize: '20px',
      });
      dispatch(errorReset(null));
    }
  }, [error, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      regist({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Username
        <FormInput type="text" name="name" />
      </FormLabel>
      <FormLabel>
        Email
        <FormInput type="email" name="email" />
      </FormLabel>
      <FormLabel>
        Password
        <FormInput type="password" name="password" />
      </FormLabel>
      <SubmitBtn type="submit">Regist</SubmitBtn>
      {isLoading && <Loader />}
    </Form>
  );
};
