import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);
  return (
    <div className={css.container}>
      <h2>Phonebook</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
