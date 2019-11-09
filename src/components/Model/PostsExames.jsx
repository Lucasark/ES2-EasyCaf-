import React from "react";

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
                </tr>
            ))}
        </tbody>
    )
}