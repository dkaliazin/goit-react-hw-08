import css from './LoginForm.module.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
export default function LoginForm() {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        dispatch(logIn(values));
        resetForm();
    }
   const FormSchema =
        Yup.object().shape({
            email: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
            password: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),   
    });
    const initialValues = {
        email: '',
        password: '',
    };

    return (
        <Formik initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FormSchema}>
            <Form className={css.form}>
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
				<button className={css.btn} type="submit">Log in</button>
			</Form>
        </Formik>
    )
}
