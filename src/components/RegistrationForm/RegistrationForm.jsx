import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from './RegistrationForm.module.css'
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
export default function RegistrationForm() {
    const dispatch = useDispatch();
    const initialValues = {
        name: '',
        email: '',
        password: '',
    };
    const handleSubmit = (values, { resetForm }) => {
        dispatch(register (values));
        resetForm();
    }
    const FormSchema =
        Yup.object().shape({
            email: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
            password: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),   
    });
     return (
        <Formik initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FormSchema}>
            <Form className={css.form}>
                <Field
                    className={css.field}
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <ErrorMessage name="name">
                    {msg => <span className={css.error}>{msg}</span>}
                </ErrorMessage>

                <Field
                    className={css.field}
                    type="text"
                    name="email"
                    placeholder="Email"
                />
                <ErrorMessage name="email">
                    {msg => <span className={css.error}>{msg}</span>}
                </ErrorMessage>

                <Field
                    className={css.field}
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <ErrorMessage name="password">
                    {msg => <span className={css.error}>{msg}</span>}
                </ErrorMessage>

                <button className={css.btn} type="submit">Sign up</button> {/* Changed button text */}
            </Form>
        </Formik>
    );
}