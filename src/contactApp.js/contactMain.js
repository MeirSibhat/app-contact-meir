import React,{useEffect} from 'react'
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import { useDispatch } from "react-redux";
import ContactList from './contactList';
import TotalContacts from './totalContacts';
import AddAContact from './addAContact';
import { doApiGet, myUrl } from './myServer/apiServer';
import NavApp from './navApp';
function ContactMain() {
  let dispatch = useDispatch();
  useEffect(() => {
    doApiGet(myUrl+"all")
    .then(data=>{
      dispatch({type:"updateList",newList:data} );
    })
  },)


  return (
    <div>
      <Router>
        <div>
        <NavApp/>
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
