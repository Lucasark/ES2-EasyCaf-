import React, { useState, useEffect } from "react";
import { Form, Table, Pagination } from "react-bootstrap";
//import API from '';
import axios from 'axios';
export default props => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);

            const res = await axios.get('http://127.0.0.1:3000/paciente/');
            setPosts(res.data);
            console.log(res.data)
            setLoading(false);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <Form style={{ width: '50%' }}>
                <Form.Group >
                    <Form.Control placeholder="paciente" />
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
                    {}
                </tbody>
            </Table>
            <div>
                <Pagination className="justify-content-center">
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
        </div>

    )
}