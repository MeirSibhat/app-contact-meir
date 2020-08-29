import React, { useState } from 'react'
import MyMsgInfo from './myMsgInfo';
import { MDBCard, MDBCardBody, MDBCardText, MDBCol } from 'mdbreact';
import { MDBAnimation } from "mdbreact";

function ContactItem(props) {
  let item = props.item;
  let index = props.index;
  const [modelInfo, seModelInfo] = useState(false);
  let msgHeader = "edit contact ";
  const modelInfoClose = () => {
    seModelInfo(!modelInfo)
  }
  const theAnmationList = (index) => {
    let list = ["fadeInDown", "fadeInLeft", "fadeInRight"]
    if (index <2)
      return (list[0])
      else if(index%2===0)
      return list[1]
      else return list[2]
  }

  return (
    <MDBCol className="itemCol" md='6' onClick={modelInfoClose} h>
      <MDBAnimation type={theAnmationList(index)} delay-3s="true"  >
        <MDBCard >
          <MDBCardBody>
            <MDBCardText>
              {item.firstName} &nbsp;  &nbsp;{item.lastName}
              <br />
              {item.email}
              <br />
              {item.areaCode}{item.phone}

            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        {modelInfo && <MyMsgInfo modelInfoClose={modelInfoClose} item={item} modelInfo={modelInfo} myModelHeader={msgHeader} />}

      </MDBAnimation>
    </MDBCol>
  )
}

export default ContactItem
