import { FaTrashAlt } from 'react-icons/fa';
import { ContactItem } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <span>{name}</span>
          <span>{number}</span>

          <FaTrashAlt
            style={{
              cursor: 'pointer',
              color: 'crimson',
            }}
            onClick={() => {
              handleDelete(id);
            }}
          />
        </ContactItem>
      ))}
    </ul>
  );
};

export default ContactsList;
