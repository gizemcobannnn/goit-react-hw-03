import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState(() => {
    // LocalStorage'dan veri yükleme
    const storedContacts = JSON.parse(localStorage.getItem("personData"));
    return (
      storedContacts || [
        { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
        { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
      ]
    );
  });

  useEffect(() => {
    // LocalStorage'ı güncelle
    localStorage.setItem("personData", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const contactExists = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() &&
        contact.phone === newContact.phone
    );

    if (contactExists) {
      alert("This contact already exists. Please add a new contact.");
    } else {
      setContacts((prevContacts) => [...prevContacts, newContact]);
    }
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox searchTerm={searchTerm} onSearch={handleSearch} />
      <ContactList
        searchTerm={searchTerm}
        contacts={contacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
