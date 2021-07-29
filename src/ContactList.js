import React from 'react'
import { Link } from 'react-router-dom'
import CardContact from './ContactCard'

const ContactList = (props) => {
  console.log(props)

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  }

  const renderContactList= props.contacts.map((contact)=>{
    return (<div>
        <CardContact contact={contact} clickHandler={deleteContactHandler} key={contact.id}></CardContact>
      </div>
    )
  })
  return (
    <div className='main'>
      <h2 className='cont2'>
        Contact List
        <Link to='/add'>
          <button className='ui button blue right'>Add Contact</button>
        </Link>
      </h2>
      <div className="ui middle aligned divided list">{renderContactList}</div>
    </div>)
}

export default ContactList;
