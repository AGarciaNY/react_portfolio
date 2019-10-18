import React from 'react';
import styled from '@emotion/styled';

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 140px;
`;

const Title = styled.p`
  color:white;
  text-align:center;
  font-weight: bold;
  margin:0;
  
  `;

const Data = styled.p`
  color:white;
  font-size:12px;
  text-indent: 50px;
  padding:0 10px 0;
  width:280px;
`;

const Information = styled.div`
  visibility: hidden;
  position: absolute;
  top:0;
`;

const Button1 = styled.button`
  position: absolute;
  left:220px;
  bottom:0;
  background-color:silver;
  border-radius:20px;
  visibility: hidden;
  cursor: pointer;
`;

const TitleHolder = styled.div`
  position: absolute;
  top:-25px;
  width:300px;
`;

const Box = styled.div`
margin:30px;
width:300px;
height:150px;
background:#353535;
border-radius:30px;
position:relative;
&:hover{
  &>img{
    visibility: hidden;
  }
  &>div{
    visibility: visible;
  }
  &>button{
    visibility: visible;
  }
}
`;

const Boxes = ({name,nametwo,title,info})=>(

  <Box>
    <TitleHolder>
      <Title>{title}</Title>
    </TitleHolder>
    <Img  alt={name} src={nametwo}/>
    <Information>
      <Data>{info}</Data>
    </Information>
    <Button1>see it</Button1>
  </Box>

);
export default Boxes;