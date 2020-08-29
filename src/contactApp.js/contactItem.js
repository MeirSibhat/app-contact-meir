import React, { useState } from 'react'
import MyMsgInfo from './myMsgInfo';

function ContactItem(props) {
  let item = props.item;
  let index = props.index;
  const [modelInfo, seModelInfo] = useState(false);
  let msgHeader = "edit contact ";
  const modelInfoClose = () => {
    seModelInfo(!modelInfo)
  }

  return (

    <tr onClick={modelInfoClose}  >
      <td className="align-middle">{index + 1}</td>
      <td className="align-middle">{item.firstName}</td>
      <td className="align-middle">{item.lastName}</td>
      <td className="align-middle">{item.email}</td>
      <td className="align-middle">{item.areaCode}{item.phone}</td>

      {modelInfo && <MyMsgInfo modelInfoClose={modelInfoClose} item={item} modelInfo={modelInfo} myModelHeader={msgHeader} />}

    </tr>
  )
}

export default ContactItem
