//firstName
export let myList = [
    {
        firstName: "avi",
        lastName: "sibhat",
        email: "avi@gmail.com",
        phone: "0587451254",
    },
    {
        firstName: "meir",
        lastName: "sibhat",
        email: "meir@gmail.com",
        phone: "0587451254",
    },
    {
        firstName: "dani",
        lastName: "sibhat",
        email: "dani@gmail.com",
        phone: "0587451254",
    },
    {
        firstName: "roni",
        lastName: "sibhat",
        email: "roni@gmail.com",
        phone: "0587451254",
    },

]

/*
import React, { useState } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
} from "mdbreact";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import ContactList from './contactList';
import TotalContacts from './totalContacts';
import AddAContact from './addAContact';
function ContactMain(props) {
  //let history = useHistory()
  const [isOpen, setIsOpen] = useState(false)
 console.log(props.match);
  const toggleCollapse = () => { setIsOpen(!isOpen) }
  return (
    <div>
      <Router>
        <div>
          <MDBNavbar  color="indigo" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text">Navbar</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse   isOpen={isOpen} navbar>
              <MDBNavbarNav left className="pl-40">
                <MDBNavItem >
                  <MDBNavLink to="/">Add</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/list">List</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/total">Total</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

          <Switch>
            <Route path="/list">
              <ContactList />
            </Route>
            <Route path="/total">
              <TotalContacts />
            </Route>
            <Route path="/">
              <AddAContact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default ContactMain

*/