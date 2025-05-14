import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required("Required"),
    number: Yup.string().min(3).max(50).required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>

        <label className={css.label}>
          Number
          <Field name="number" className={css.input} />
          <ErrorMessage name="number" component="div" className={css.error} />
        </label>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
