import React from "react";
import Button from "../Model/CustomButton";
import { Card } from "react-bootstrap";

export default props => {
    return(
        <div className="justify-content-center align-items-center" style={{marginTop: "40px"}}>
            <Card.Title>{props.titleBox}</Card.Title>
            <Card.Text>{props.textBox}</Card.Text>
            {props.buttonText && <Button className={"pull-right", "btn-fill"} href={props.buttonPath}>{props.buttonText}</Button>}
        </div>
    );
}