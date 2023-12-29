import React from 'react'
import UkVideo from "../../../Assets/images/Uk.mp4"
function index() {
    return (
        <div> <video src={JSON.stringify(UkVideo)} width="750" height="500" controls>
        </video></div>
    )
}

export default index