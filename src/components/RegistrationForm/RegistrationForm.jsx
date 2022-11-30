import { useDispatch } from 'react-redux';
import { regist } from 'redux/auth/operations';
import {
  Form,
  FormInput,
  FormLabel,
  SubmitBtn,
} from './RegistrationForm.styled';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

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
    </Form>
  );
};
