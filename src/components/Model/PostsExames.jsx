import React from "react";
import { Button } from "react-bootstrap";

export default props => {

    return (
        <tbody>
            {props.posts.map(post => (
                <tr key={post.id}>
                    <td>{'Exame ID: '+post.id}</td>
                    <td>{post.status}</td>
                    <td>{post.data_criacao}</td>
                    <td>{post.exame_paciente.nome}</td>
                    <td>{post.data_alteracao}</td>
                    <td><Button onClick={() => {props.handle(2); props.exame(post)}}>ver</Button></td>
                </tr>
            ))}
        </tbody>
    )
}