import React, {Component} from 'react';
import pig from '../../../img/project-pics/pig.png';
import gif from '../../../img/project-pics/gif.png';
import dhelper from '../../../img/project-pics/dhelper.png';
import hang from '../../../img/project-pics/hang.png';
import hu from '../../../img/project-pics/hu.png';
import rps from '../../../img/project-pics/rps.png';
import school from '../../../img/project-pics/school.png';
import styled from '@emotion/styled';


const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height:100px;
`;

const Title = styled.p`
  color:white;
  text-align:center;
  font-weight: bold;

  `;

const Data = styled.p`
  color:white;
  font-size:12px;
`;

const Holder = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

const Box = styled.div`
  margin:30px;
  width:220px;
  height:300px;
  background:#353535;
  border-radius:30px;
  
`;

const Line= styled.div`
  width:220px;
  height:1px;
  background-color:white;
`;

const Boxes = ({name,nametwo,title,info})=>(

  <Box>
    <Img  alt={name} src={nametwo}/>
    <Line/>
    <Title>{title}</Title>
    <Data>{info}</Data>
  </Box>

);

export default class Cube extends Component{

  render(){
    
    return(

      <Holder>
        <Boxes
          name={pig}
          nametwo={pig}
          title="Pig Latinizer"
          info="teams are the best"
        />
        <Boxes
          name={gif}
          nametwo={gif}
          title=""
          info=""
        />
        <Boxes
          name={dhelper}
          nametwo={dhelper}
          title=""
          info=""
        />
        <Boxes
          name={hang}
          nametwo={hang}
          title=""
          info=""
        />
        <Boxes
          name={hu}
          nametwo={hu}
          title=""
          info=""
        />
        <Boxes
          name={rps}
          nametwo={rps}
          title=""
          info=""
        />
        <Boxes
          name={school}
          nametwo={school}
          title=""
          info=""
        />
      </Holder>

    );
  }
}