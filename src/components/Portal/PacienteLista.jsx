import React, { useState, useEffect } from "react";
import { FormControl, Table, InputGroup, Button } from "react-bootstrap";
import Pagination from '../Model/Pagination';
import Posts from '../Model/Posts';
import ButtonDefault from "../Model/CustomButton";
import axios from 'axios';

export default props => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [names] = useState(['Joao', 'Pedro', 'Caio', 'Jorge'])

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https:/app-exasy-exam-es.herokuapp.com/paciente/')
            setPosts(res.data.data);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    console.log(posts.length);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <div style={{minHeight: '40px', height: '40px', marginBottom: '1%'}}>
                <InputGroup className="mb-3" style={{ width: '50%', height:'100%'}}>
                    <InputGroup.Prepend style={{height:'100%'}}>
                    <ButtonDefault className="col-md-12" btnText="Buscar" style={{height:'100%', borderRadius: '2px'}}></ButtonDefault>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder='Paciente'
                    />
                </InputGroup>
            </div>
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
                <Posts posts={currentPosts} loading={loading} />
            </Table>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>

    )
}