import React,{Component} from 'react';
import styled from '@emotion/styled';

import data from '../myprojects'

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  height: 140px;
`;

const Title = styled.p`
  color: white;
  text-align: center;
  font-weight: bold;
  margin: 0;
  
  `;

const Data = styled.p`
  color: white;
  font-size: 12px;
  text-indent: 50px;
  padding: 0 10px 0;
  width: 280px;
`;

const Information = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
`;

const Button1 = styled.button`
  position: absolute;
  right: 20px;
  bottom: 2px;
  background-color: silver;
  border-radius: 20px;
  visibility: hidden;
  cursor: pointer;
`;

const TitleHolder = styled.div`
  position: absolute;
  top: -25px;
  width: 300px;
`;

const Box = styled.div`
  margin: 30px;
  width: 300px;
  height: 150px;
  background: #353535;
  border-radius: 30px;
  position: relative;

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

const openProject=(link)=>{
  window.open(link)
}
// for (let i in this.props.namesList) {
  //   let nameString = this.props.namesList[i];
  //   namesLiList.push(<li key={i}>{nameString}</li>);
  // }
const sampel = ({name,nametwo,title,info,link})=>(
  <Box>
    <TitleHolder>
      <Title>{title}</Title>
    </TitleHolder>
    <Img  alt={name} src={nametwo}/>
    <Information>
      <Data>{info}</Data>
    </Information>
    <Button1 onClick={() => openProject(link)}>see it</Button1>
  </Box>

);

export default class Boxes extends Component{
  
  render(){

    return(

      <Holder>
        <Boxes/>
      </Holder>

    );
  }
}