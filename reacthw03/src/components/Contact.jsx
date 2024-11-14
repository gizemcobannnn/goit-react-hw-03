import PropTypes from 'prop-types';

const Contact = ({contact}) => {
  return (
    <div className="Contact">
        <div className='person-contact'  style={{display:"flex",flexDirection:"row"}}>
        <div  style={{display:"flex",flexDirection:"column",}}>
        <div className='person-name' style={{display:"flex",flexDirection:"row",alignItems:"center"}} >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:"20px"}}>
              <path d="M12 12c2.76 0 5-2.24 5-5S14.76 2 12 2 7 4.24 7 7s2.24 5 5 5zm0 2c-3.31 0-10 1.66-10 5v2h20v-2c0-3.34-6.69-5-10-5z" fill="grey"/>
            </svg>
            <p id="username">{contact.name}</p>
        </div>
        <div className='person-phone' style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:"20px"}}>
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.27 1.12.28 2.33.43 3.57.43.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.39 21 3 14.61 3 7c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.15 2.45.43 3.57.09.35 0 .74-.27 1.02l-2.2 2.2z" fill="grey"/>
            </svg>
            <p id="phone">{contact.phone}</p>
        </div>
        </div>
        
        <div className="delete-div">
            <button className="delete-button">Delete</button>
        </div>
        </div>

    </div>
  )
};

Contact.propTypes = {
    contact: PropTypes.shape({
      name: PropTypes.string.isRequired,  // name özelliğinin bir zorunlu string olduğunu belirtiyoruz
      phone: PropTypes.string.isRequired, // phone özelliğinin bir zorunlu string olduğunu belirtiyoruz
    }).isRequired,
  };

export default Contact