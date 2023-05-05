import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import {
  Form,
  FormField,
  Wrapper,
  Input,
  FormLabel,
  ErrorMessage,
  FormButton,
} from './ContactForm.styled';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiSmartphone } from 'react-icons/gi';

const ContactSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required!'),
  number: Yup.string().phone('UA').required('Phone number is required!'),
});
export const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact(values.name, values.number));
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          <FormLabel>Name</FormLabel>
          <Wrapper>
            <Field name="name">
              {({ field }) => {
                return <Input {...field} placeholder="your name" />;
              }}
            </Field>

            <BsFillPersonFill
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
              }}
            />
          </Wrapper>
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          <FormLabel>Number</FormLabel>
          <Wrapper>
            <Field name="number">
              {({ field }) => {
                return <Input {...field} placeholder="+38-0xx-xxx-xx-xx" />;
              }}
            </Field>
            <GiSmartphone
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
              }}
            />
          </Wrapper>
          <ErrorMessage name="number" component="div" />
        </FormField>

        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </Formik>
  );
};

export default ContactForm;
