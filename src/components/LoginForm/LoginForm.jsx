import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, FormInput, FormLabel, SubmitBtn } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

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
    </Form>
  );
};
