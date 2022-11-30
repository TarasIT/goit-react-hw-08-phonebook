import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import { logIn } from 'redux/auth/operations';
import { errorReset } from 'redux/auth/authSlice';
import { selectError, selectIsLoading } from 'redux/auth/selectors';
import { Form, FormInput, FormLabel, SubmitBtn } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (error !== null) {
      Notiflix.Notify.info('Invalid email or password!', {
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
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Email
        <FormInput type="email" name="email" />
      </FormLabel>
      <FormLabel>
        Password
        <FormInput type="password" name="password" />
      </FormLabel>
      <SubmitBtn type="submit">Log In</SubmitBtn>
      {isLoading && <Loader />}
    </Form>
  );
};
