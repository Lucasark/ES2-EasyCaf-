import React from "react";
import {  Form, Table, Pagination } from "react-bootstrap";
export default props => {
    return(
        <div>
            <Form style={{width: '50%'}}>
                <Form.Group >
                    <Form.Control placeholder="paciente"/>
                </Form.Group>
            </Form>
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Data de Nascimento</th>
                        <th>Peso</th>
                        <th>Altura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table>
            <div>
                <Pagination className="justify-content-center">
                    <Pagination.First/>
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
        </div>
        
    )
}