import React from "react";
import { ButtonGroup,Button,Select,Grid } from "@chakra-ui/react";
import {useEffect, useState} from 'react';
import axios from "axios";
import Product from "./Product";


const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
  const [prd, setPrd] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3
    );
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
      .then((r) => {
        console.log(r);
        setPrd(r.data);
        setTotalCount(Number(r.headers["x-total-count"]));
      });
  }, [page, limit]);

  return (
    <ButtonGroup>
       <Grid><div>
      {prd.map((data,index)=>(
        <div key={data.id}>
          {data.id} {`:`}
          <p>
          {data.title}</p>
          <p>{data.category}</p>
          <p>{data.gender}</p>
          <img style={{height:"200px",width:"300px"}} src={data.imageSrc} alt=""/>
          
          </div>
            
               
           
      ))}
        </div>
        </Grid>
       
       
      <Button data-cy="pagination-first-button"></Button>
      <Button data-cy="pagination-previous-button" disabled={page <= 1}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}>
            {`<`}
          </Button>
      <Select data-cy="pagination-limit-select"  onChange={(e) => setLimit(Number(e.target.value))}>
        <option data-cy="pagination-limit-3" value={3}>3</option>
        <option data-cy="pagination-limit-6" value={6}>6</option>
        <option data-cy="pagination-limit-9" value={9}>9</option>
      </Select>
      <Button data-cy="pagination-next-button" disabled={totalCount < page * limit}
          onClick={() => setPage(page + 1)}>
            {`>`}
          </Button>
      <Button data-cy="pagination-last-button"></Button>
    </ButtonGroup>
  );
};

export default Pagination;
