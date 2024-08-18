import { nanoid } from 'nanoid';
import css from './RegistationForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { register } from "../../redux/auth/operations";
/*/*/
const RegistationForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
        
    }

    const FormSchema =
        Yup.object().shape({
            email: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
            password: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),   
    });
    
    const initialValues = {
        name: '',
        email: '',
        password: '',
    };
    
    return (
        <Formik initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FormSchema}>
            <Form className={css.form}>
                <Field className={css.field}
                    type="text" name="name" placeholder="Username" />
                 <ErrorMessage
                    name="name"
                ></ErrorMessage>
                <Field className={css.field}
                    type="text" name="email" placeholder="Email" />
                 <ErrorMessage
                    name="email"
                >
                    {msg => <span className={css.error}>{msg}</span>}
                    </ErrorMessage>
                <Field className={css.field}
                    type="password" name="password" placeholder="Password" />
                <ErrorMessage
                    name="password"
                >
                    {msg => <span className={css.error}>{msg}</span>}
                    </ErrorMessage>
				<button className={css.btn} type="submit">Sign in</button>
			</Form>
        </Formik>
        /*<form className={css.form} onSubmit={handleSubmit}>
            <input className={css.field} type='text' name='name' />
            <input className={css.field} type='text' name='number' />
            <button className={css.btn} type='submit'>Add contact</button>
        </form>*/
    )
}
export default RegistationForm;