import { useState } from 'react'
import ContactForm from './components/ContactForm'
import SearchBox from './components/SearchBox'
import ContactList
 from './components/ContactList'
import './App.css'

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (input) => {
    setSearchTerm(input); // SearchBox'tan gelen değeri güncelliyoruz
  };
  return (
    <>
     <div>
    <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox onSearch={handleSearch} />
    <ContactList searchTerm={searchTerm} />
    </div>

    </>
  )
}

export default App
