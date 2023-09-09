import React from "react";

function Footer(){
    let day = new Date();
    let year = day.getFullYear();
    console.log(day)
    return (<footer>
        <p>Copyright {year}</p> 
        <h1>Hello</h1></footer>
    )
}

export default Footer;