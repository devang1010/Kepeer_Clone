import React from "react";

function Footer(){
    let day = new Date();
    let year = new day.getFullYear();

    return (<footer>
        <p>Copyright {year}</p>
    </footer>)
}

export default Footer;