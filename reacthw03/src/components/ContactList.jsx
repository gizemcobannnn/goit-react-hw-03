import { useState, useEffect } from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";

const ContactList = ({ contacts: initialContacts, searchTerm }) => {
  const [contactsList, setContactsList] = useState(initialContacts); // `contacts` yerine farklı bir isim

  function handleDelete(id) {
    const updatedContacts = contactsList.filter((contact) => contact.id !== id);
    setContactsList(updatedContacts); // State'i güncelliyoruz
  }

  useEffect(() => {
    // Arama filtresi her değiştiğinde tetiklenir
    if (searchTerm) {
      const filteredContacts = initialContacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setContactsList(filteredContacts);
    } else {
      setContactsList(initialContacts); // Arama terimi boşsa tüm listeyi göster
    }
  }, [searchTerm, initialContacts]); // `searchTerm` veya `initialContacts` değişirse çalışır

  return (
    <div className="ContactList">
      {contactsList.length > 0 ? (
        contactsList.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={handleDelete} // Her bir contact bileşenine `onDelete` gönderiliyor
          />
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default ContactList;
