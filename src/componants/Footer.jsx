import React from "react";

function Footer(){
    let day = new Date();
    let year = day.getFullYear();
    console.log(day)
    return (<footer>
        <p>Copyright © {year}</p> 
    </footer>
    )
}

export default Footer;