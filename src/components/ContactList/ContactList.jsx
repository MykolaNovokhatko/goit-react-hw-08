import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectVisibleContacts } from "../../redux/contacts/slice";
import css from "./ContactList.module.css";

export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div className={css.contactList}>
      <ul className={css.listStyle}>
        {visibleContacts.map((contact) => (
          <li className={css.itemStyle} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}