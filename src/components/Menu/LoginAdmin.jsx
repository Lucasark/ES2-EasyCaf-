import React from "react";
import {Row, Form } from "react-bootstrap";
import Button from "../Model/CustomButton";

export default props => {
    return(
        <Row className="justify-content-center">
            <Form>
                <Form.Row className="">
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>
                    <Button type="submit" bsstyle="info" pullRight fill>
                            Verificar Paciente
                    </Button>
                </Form>
        </Row>
    )
}