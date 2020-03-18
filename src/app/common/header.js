import React from "react";

const Header = ({...props}) => {
    const {title} = props
   return(
       <div className={"Header"}>
           <h2>
               {title}
           </h2>
       </div>
   )
}
export default Header
