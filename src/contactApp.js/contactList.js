import React from 'react'
import { useSelector } from "react-redux"
import ContactItem from './contactItem'
import { MDBAnimation } from "mdbreact";

function ContactList(props) {
  let myList = useSelector(state => state.contectList)
  return (
    <MDBAnimation type="fadeInLeft" delay-3s="true"  >
      <table className="table table-striped" id="headerTable2">
        <thead>
          <tr>
            <th>#</th>
            <th>First name </th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {myList.map((item, index) => {
            return <ContactItem key={item.firstName + index} item={item} index={index} />
          })}
        </tbody>
      </table>
    </MDBAnimation>
  )
}
export default ContactList
