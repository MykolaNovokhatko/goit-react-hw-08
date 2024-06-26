import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor="" className={css.group}>
          Name
          <Field type="name" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label htmlFor="" className={css.group}>
          Email
          <Field type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="spam" />
        </label>
        <label htmlFor="" className={css.group}>
          Password
          <Field type="password" name="password" />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </label>
        <button type="submit" className={css.btnForm}>
          Register
        </button>
      </Form>
    </Formik>
  );
}