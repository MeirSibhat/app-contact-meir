

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {  MDBRow, MDBCol } from 'mdbreact';
import { doApiUpdate, myUrl } from './myServer/apiServer';
import { useDispatch } from "react-redux";

function MyMsgInfo(props) {
    const item=props.item;

    const toggle = () => {
        props.modelInfoClose();
    }
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
            areaCode:e.target.area.value,
            id:item._id

        }

        let url=myUrl
        
        doApiUpdate(url+"edit",obj)
        .then(data=>{
            if(data.errors) 
            alert(data.message)
            else
            dispatch({type:"updateList",newList:data} );
            props.modelInfoClose();
        })
    }
    return (

            <Modal style={{ textAlign: "center", direction: "rtl", marginTop: "20px" }} isOpen={props.modelInfo} toggle={toggle} >
                <ModalHeader style={{ textAlign: "center", display: "block", backgroundColor: "deepskyblue" }}>{props.myModelHeader}</ModalHeader>
                <ModalBody>
                    <form onSubmit={sendForm} >
                        <label htmlFor="fName" className="grey-text"> first name</label>
                        <input type="text" id="fName" className="form-control" required minLength={2} defaultValue={item.firstName} />
                        <br />

                        <label htmlFor="lName" className="grey-text"> last name   </label>
                        <input type="text" id="lName" className="form-control" required minLength={2} defaultValue={item.lastName}/>
                        <br />

                        <label htmlFor="email" className="grey-text">  email</label>
                        <input type="email" id="email" className="form-control"  required minLength={5}  defaultValue={item.email}/>
                        <br />

                        <MDBRow>

                            <MDBCol md="8">
                                <label htmlFor="phone" className="grey-text">  phone</label>
                                <input type="text" id="phone" className="form-control"  required minLength={6} defaultValue={item.phone} />
                            </MDBCol>
                            <MDBCol md="4" >
                                <label htmlFor="area" className="grey-text">area code</label>
                                <input type="text" id="area" className="form-control"   required maxLength={5} defaultValue={item.areaCode}/>
                            </MDBCol>
                        </MDBRow>


                        <div className="text-center mt-4">
                            <hr />
                            <Button color="dark" onClick={toggle}>close</Button>
                            <Button type="submit"  color="primary" >save</Button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>

    )
}

export default MyMsgInfo


