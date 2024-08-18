import { nanoid } from 'nanoid';
import css from './';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
const ContactForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
    dispatch(
        addContact({
            id: nanoid(),
            name: values.name,
            number: values.number
        })
    );
        resetForm();
        
    }

    const FormSchema =
        Yup.object().shape({
            name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
            number: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),   
    });
    
    const initialValues = {
        name: "",
        number: ""
    };
    
    return (
        <Formik initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FormSchema}>
            <Form className={css.form}>
                <Field className={css.field}
                    type="text" name="name" placeholder="Name" />
                 <ErrorMessage
                    name="name"
                >
                    {msg => <span className={css.error}>{msg}</span>}
                    </ErrorMessage>
                <Field className={css.field}
                    type="text" name="number" placeholder="Number" />
                <ErrorMessage
                    name="number"
                >
                    {msg => <span className={css.error}>{msg}</span>}
                    </ErrorMessage>
				<button className={css.btn} type="submit">Add contact</button>
			</Form>
        </Formik>
        /*<form className={css.form} onSubmit={handleSubmit}>
            <input className={css.field} type='text' name='name' />
            <input className={css.field} type='text' name='number' />
            <button className={css.btn} type='submit'>Add contact</button>
        </form>*/
    )
}
export default ContactForm;