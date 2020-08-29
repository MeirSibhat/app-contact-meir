import React from 'react'
import { MDBAnimation } from "mdbreact";

import { useSelector } from "react-redux"
function TotalContacts(props) {
    let myList = useSelector(state => state.contectList)
    return (
        <div className="totalPage">
                <MDBAnimation type="flip" >

            count of contacts {myList.length}
            </MDBAnimation>

        </div>
    )
}

export default TotalContacts
