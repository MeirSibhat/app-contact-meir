import React from 'react'
import { useSelector } from "react-redux"
import ContactItem from './contactItem'
import {MDBRow } from "mdbreact";

function ContactList(props) {
  let myList = useSelector(state => state.contectList)
  return (
    <div className="container">
    <br/>
    <br/>
    <MDBRow>

          {myList.map((item, index) => {
            return <ContactItem key={item.firstName + index} item={item} index={index} />
          })}
    </MDBRow>
    </div>
  )
}
export default ContactList
