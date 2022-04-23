import React from "react";

// With JSX 

// const Hello = () => {
//     return ( 
//         <div id="main-id" className="main">
//             <h1 id="header-id" className="header">Hello Uma</h1>
//         </div>
//     )
// }

// Without JSX

const Hello = () => {
    return React.createElement("div", 
                               {id: "main-id", className: "main"}, 
                                React.createElement('h1', 
                                                    {id: "header-id", className: "header"}, 
                                                        "Helo Scott"))
}

export default Hello