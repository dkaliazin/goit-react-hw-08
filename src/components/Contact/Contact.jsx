import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
export default function Contact({ data: { name, number, id } }) {
    const dispatch = useDispatch();
    const onDelete = () => {
        dispatch(deleteContact(id));
    }
    return (
        <div className={css.container}>
        <div className={css.containertext}>
            <p className={css.text}>
                {name}
            </p>
            <p className={css.text}>
                {number}
            </p>
        </div>
            <button type="button" className={css.btn} onClick={onDelete}>Delete</button>
        </div>
    )
}