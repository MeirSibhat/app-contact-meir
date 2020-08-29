

import React from "react";
// import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { myUrl,doApiPost } from "./myServer/apiServer";
import {useHistory} from 'react-router-dom';
import { MDBAnimation } from "mdbreact";

const AddAContact = () => {
    let history = useHistory();
  let dispatch = useDispatch()
    const sendForm = (e) => {
        e.preventDefault()
        let num=e.target.phone.value;
        num=num[0]==='0'?num.slice(1):num;
        let obj = {
            firstName: e.target.fName.value,
            lastName: e.target.lName.value,
            email: e.target.email.value,
            phone: num,
            areaCode:e.target.area.value
        }

        let url= myUrl;
        doApiPost(url+"add",obj)
        .then(data=>{
            if(!data.errors)
            dispatch({type:"updateList",newList:data});
            else
            alert(data.message)
            history.push("/list");
        })
    }
    return (
        <MDBContainer >
            <MDBRow className="justify-content-center align-items-center d-flex">
                <MDBCol md="6">
                <MDBAnimation type="bounceIn" >
                    <form onSubmit={sendForm} className="formAdd" >
                        <p className="h5 text-center mb-4">Add Contact</p>
                        <div className="grey-text">
                            <MDBInput label="first name" id="fName" icon="user" group type="text" required minLength={2}  />
                            <MDBInput label="last name" id="lName" icon="user" group type="text" required minLength={2}  />
                            <MDBInput label=" email" id="email" icon="envelope" group type="email"  required minLength={6}  />

                            <MDBRow>
                                <MDBCol md="6" style={{ paddingLeft: "10%" }}>
                                    <MDBInput label="area code"  id="area" group type="text" maxLength={6} required />

                                </MDBCol>
                                <MDBCol md="6">
                                    <MDBInput label="phone" id="phone" group type="text" required minLength={5}  />

                                </MDBCol>
                            </MDBRow>
                        </div>
                        <br />
                        <div className="text-center">
                            <MDBBtn type="submit" color="primary">Add</MDBBtn>
                        </div>
                    </form>
        </MDBAnimation> 
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    );
};

export default AddAContact;
