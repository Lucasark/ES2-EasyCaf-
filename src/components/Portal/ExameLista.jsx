import React, { useState, useEffect } from "react";
import { FormControl, Table, InputGroup, Button } from "react-bootstrap";
import Pagination from '../Model/Pagination';
import PostsExames from '../Model/PostsExames'
import axios from 'axios';
import ButtonDefault from "../Model/CustomButton";

export default props => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://app-exasy-exam-es.herokuapp.com/exame/')
            setPosts(res.data.data);
            setLoading(false);           
        };
        fetchPosts();
    }, []);



    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div class="container">
            <div style={{minHeight: '40px', height: '40px', marginBottom: '1%'}}>
                <InputGroup className="mb-3" style={{ width: '50%', height:'100%'}}>
                    <InputGroup.Prepend style={{height:'100%'}}>
                    <ButtonDefault className="col-md-12" btnText="Buscar" style={{height:'100%', borderRadius: '2px',
                borderBottomLeftRadius: '20px', borderTopLeftRadius: '20px'}}></ButtonDefault>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder='Exame' style={{borderBottomRightRadius: '20px', borderTopRightRadius: '20px'}} 
                    />
                </InputGroup>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Identificador</th>
                        <th>Estado</th>
                        <th>Data de Criação</th>
                        <th>Paciente</th>
                        <th>Última Atulização</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <PostsExames exame={props.exame} handle={props.handle} posts={currentPosts} loading={loading} />
            </Table>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>

    )
}