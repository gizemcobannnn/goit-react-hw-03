import { useState } from 'react'
import ContactForm from './components/ContactForm'
import SearchBox from './components/SearchBox'
import ContactList
 from './components/ContactList'
import './App.css'

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
    { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
  ]);

  // Yeni kişi ekleme fonksiyonu
   const addContact = (newContact) => {
    // Yeni kişiyi mevcut listenin sonuna ekliyoruz
    setContacts((prevContacts) => [...prevContacts, { ...newContact, id: `id-${prevContacts.length + 1}` }]);
  };

  const handleSearch = (input) => {
    setSearchTerm(input); // SearchBox'tan gelen değeri güncelliyoruz
  };
  return (
    <>
     <div>
    <h1>Phonebook</h1>
    <ContactForm onAddContact={addContact}/>
    <SearchBox onSearch={handleSearch} />
    <ContactList searchTerm={searchTerm} contacts={contacts} onSearch={handleSearch}  />
    </div>

    </>
  )
}

export default App
