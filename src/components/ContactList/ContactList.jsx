import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors.js";
import Contact from "../Contact/Contact.jsx";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
