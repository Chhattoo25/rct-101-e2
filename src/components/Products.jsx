import React from "react";
import { Flex,Grid } from "@chakra-ui/react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import { useState,useEffect } from "react";
import axios from "axios";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  const[page,setpage]=useState(1)
  const[lastpage,setlastpage]=useState(0)
  const[data,setdata]=useState([])
  useEffect(()=>{
    const getdata=async()=>{
      let r=await axios.get(`http://localhost:8080/products?_page=${page}&_limit=3`);
      setdata(r.data)
    }
    getdata()
  },[page])

  return (
    <Flex>
      {/*  AddProduct */}
      {/* <AddProduct/> */}
      <Grid><div>
      {data.map((data,index)=>(
        <div key={data.id}>
          {data.id} {`:`}
          <p>
          {data.title}</p>
          <p>{data.category}</p>
          <p>{data.gender}</p>
          <img style={{height:"200px",width:"300px"}} src={data.imageSrc} alt=""/>
          
          </div>
            
               
           
      ))}
        </div></Grid>
    
      {/* <Pagination/> */}
    </Flex>
  );
};

export default Products;