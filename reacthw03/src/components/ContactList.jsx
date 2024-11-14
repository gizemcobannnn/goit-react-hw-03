import Contact from './Contact'

const ContactList = (searchTerm) => {
    searchTerm
    const contacts = [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ];
      const filteredContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(
          typeof searchTerm === "string" ? searchTerm.toLowerCase() : ""
        )
      );

      return (
    <div className="ContactList">
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} /> // Her bir contact bileşenine filtrelenen veriyi gönderiyoruz
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  )
}

export default ContactList