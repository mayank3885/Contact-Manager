import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import CardContact from './ContactCard'

const ContactList = (props) => {

  const inputEl=useRef("")

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  }

  const renderContactList= props.contacts.map((contact)=>{
    return (<div>
        <CardContact contact={contact} clickHandler={deleteContactHandler} key={contact.id}></CardContact>
      </div>
    )
  })

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value)
  }

  return (
    <div className='main'>
      <h2 className='cont2'>
        Contact List
        <Link to='/add'>
          <button className='ui button blue right'>Add Contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input ref={inputEl} type='text' placeholder='Search Contacts' className="prompt" value={props.term} onChange={getSearchTerm}/>
          <i className='search icon'></i>
        </div>
      </div>
      <div className="ui middle aligned divided list">{renderContactList.length > 0 ? renderContactList : "No Contacts Available"}</div>
    </div>)
}

export default ContactList;
