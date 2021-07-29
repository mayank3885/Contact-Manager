import React from 'react'
import user from "./user.png";
import { Link } from 'react-router-dom';

const ContactDetail = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <div className='htfrmtop'>
      <div className='main'>
        <div className='ui card centered'>
          <div className='image'>
            <img src={user} alt='user' />
            <div className='content'>
              <div className='header'>{name}</div>
              <div className='description'>{email}</div>
            </div>
          </div>
        </div>
        <div className='center-div'>
          <div className='centre'>
            <Link to='/'>
              <button className='ui button blue center'>Back to Contact List</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    )
}
export default ContactDetail
