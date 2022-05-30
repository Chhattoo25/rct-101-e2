import React from "react";
import { Stack,Image,Tag,TagLabel,Heading,Box,Text, Grid } from "@chakra-ui/react";


const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  // <Grid><div>
  // {data.map((data,index)=>(
  //   <div key={data.id}>
  //     {data.id} {`:`}
  //     <p>
  //     {data.title}</p>
  //     <p>{data.category}</p>
  //     <p>{data.gender}</p>
  //     <img style={{height:"200px",width:"300px"}} src={data.imageSrc} alt=""/>
      
  //     </div>
        
           
       
  // ))}
  //   </div>
  //  </Grid>
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category"></Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
  );
};

export default Product;
