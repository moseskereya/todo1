 import React from 'react';
 function Header() {
     return (
         <header style={headerStyles}>
             <h1>My first Todolist</h1>
         </header>
     )
 }


 const headerStyles ={
     display:"flex",
     justifyContent:"center",
     padding:"10px",
     backgroundColor:"#ff6666",
 }
 export default Header;