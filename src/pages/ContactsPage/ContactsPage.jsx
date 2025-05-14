import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  return (
    <div className={css.container}>
      <h2>Phonebook</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
