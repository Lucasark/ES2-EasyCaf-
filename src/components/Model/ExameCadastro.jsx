import React from "react";

export default props => {
    console.log(props.exame)
    return(
        <div>
            <h3>{props.exame.id}</h3>
        </div>
    )
}