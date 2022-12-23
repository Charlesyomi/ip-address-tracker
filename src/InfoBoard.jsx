import React from "react"

// import { useState } from "react";

const InfoBoard = ({IPAddress, location, timezone,ISP})=>{

    return(
        <div>
           <h2>ip address</h2> 
           <p>{IPAddress}</p>
           <h2>location</h2>
           <p>{location}</p> 
           <h2>timezone</h2>
           <p>{timezone}</p> 
           <h2>isp</h2> 
           <p>{ISP}</p>
        </div>
    )
}

export default InfoBoard