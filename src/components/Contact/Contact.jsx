import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.item}>
      <span className={css.name}>👤 {contact.name}</span> -{" "}
      <span className={css.number}>📞 {contact.number}</span>
      <button
        onClick={() => dispatch(deleteContact(contact.id))}
        className={css.button}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
