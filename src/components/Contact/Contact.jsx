import css from "./Contact.module.css";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
const Contact = ({ data, onDelete }) => {
    const dispatch = useDispatch();
    const onDelete = () => {
        dispatch(deleteContact(id));
    }
    return (
        <div className={css.container}>
        <div className={css.containertext}>
            <p className={css.text}>
                {data.name}
            </p>
            <p className={css.text}>
                {data.number}
            </p>
        </div>
            <button className={css.btn} onClick={onDelete}>
                Delete
            </button>
        </div>
    )
}
export default Contact;