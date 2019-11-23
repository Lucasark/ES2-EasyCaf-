import React from "react";

export default props => {

    return (
        <tbody>
            {props.posts.map(post => (
                <tr key={post.id_paciente}>
                    <td>{post.nome}</td>
                    <td>{post.email}</td>
                    <td>{post.data_nascimento}</td>
                    <td>{post.peso}</td>
                    <td>{post.altura}</td>
                </tr>
            ))}
        </tbody>
    )
}