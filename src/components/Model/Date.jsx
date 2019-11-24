import React from "react";

export default props => {
    const data = new Date();
    let day = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    if (day < 10) {
        day = '0' + day.toString();
    }
    if (mes < 10) {
        mes = '0' + mes.toString();
    }
    return (
        <div className="col-md-5">Data: {day}/{mes}/{ano}</div>
    );
}