import React, { useState } from "react";
import Button from "../Model/CustomButton";
import { Card } from "react-bootstrap";

export default props => {
    return(
        <div >
            <Card className="text-center">
                <Card.Title>{props.titleBox}</Card.Title>
                <Card.Text>{props.textBox}</Card.Text>
                {props.buttonText && <Button href={props.buttonPath}>{props.buttonText}</Button>}
            </Card>
        </div>
    );
}