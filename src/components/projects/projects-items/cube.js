import React, {Component} from 'react';
import styled from '@emotion/styled';
import Boxes from './boxes';

import pig from '../../../img/project-pics/pig.png';
import gif from '../../../img/project-pics/gif.png';
import dhelper from '../../../img/project-pics/dhelper.png';
import hang from '../../../img/project-pics/hang.png';
import hu from '../../../img/project-pics/hu.png';
import rps from '../../../img/project-pics/rps.png';
import school from '../../../img/project-pics/school.png';

const Holder = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

export default class Cube extends Component{
  
  // for (let i in this.props.namesList) {
  //   let nameString = this.props.namesList[i];
  //   namesLiList.push(<li key={i}>{nameString}</li>);
  // }
  render(){

    return(

      <Holder>
        <Boxes/>
      </Holder>

    );
  }
}