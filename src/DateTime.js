import React from 'react'

var dateTime=()=>{
    var showdate=new Date();
    var displaydate=showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullYear();
    var dt=showdate.toDateString();
    var displaytime=showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds();
    return(
      <div class='date'>
         <center>
         <p>Date And Time: <input type="text" value={displaydate} readOnly="true"/>
         {dt}-{displaytime}
         </p>
         </center>
        </div>
    );
   
}
export default dateTime;