import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
const ContactList = () => {
const visibleContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteContact(id));
  };
    return (
        <ul className={css.list}>
            {visibleContacts.map((contact) => (
                <li className={css.item} key={contact.id}>
                    <Contact data={contact} onDelete={onDelete} />
            </li>
            ))}
        </ul>
    )
 
}
export default ContactList;