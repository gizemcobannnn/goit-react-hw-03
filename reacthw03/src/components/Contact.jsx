const Contact = () => {
  return (
    <div>
        <div className='person-contact'>
        <div className='person-name'>
            <svg></svg>
            <p id="username"></p>
        </div>
        <div className='person-phone'>
            <svg></svg>
            <p id="phone"></p>
        </div>
        <div className="delete-div">
            <button className="delete-button">Delete</button>
        </div>
        </div>

    </div>
  )
}

export default Contact