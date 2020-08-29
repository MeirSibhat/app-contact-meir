import React,{useEffect} from 'react'
import { BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import ContactList from './contactList';
import TotalContacts from './totalContacts';
import AddAContact from './addAContact';
import { doApiGet, myUrl } from './myServer/apiServer';
function ContactMain() {
  let dispatch = useDispatch();
  useEffect(() => {
    doApiGet(myUrl+"all")
    .then(data=>{
      console.log(data);
      dispatch({type:"updateList",newList:data} );
    })
  },)


  return (
    <div>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top  ">
            <span style={{color:"white"}} >Contact App</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li>
                  <Link className="nav-link" to="/">Add</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/list">List</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/total">Total</Link>
                </li>
              </ul>
            </div>
          </nav>
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
