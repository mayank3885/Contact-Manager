import React from 'react'
import user from "./user.png";
import { Link } from 'react-router-dom';

const CardContact = (props) => {
  const { name, email, id } = props.contact
  return (
    <div className='cont'>
      <div className='ek'>
        <img className="ui avatar image" src={user} alt="user"/>
        <div className='do'>
          <Link to={{pathname:`/contact/${id}`, state: {contact: props.contact}}}>
            <div className='header'>{name}</div>
            {email}
          </Link>
        </div>
      </div>
      <div className='teen'>
        <i className='trash alternate outline icon' style={{color: 'red'}}
        onClick={() => {
          let r=window.confirm('Are you sure you want to delete this contact')
          if(r===true){
            props.clickHandler(id)
          }

        }}></i>
      </div>

    </div>
    )
}
export default CardContact;
