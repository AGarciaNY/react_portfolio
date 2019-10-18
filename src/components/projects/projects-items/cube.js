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

  render(){
    
    return(

      <Holder>
        <Boxes
          name={pig}
          nametwo={pig}
          title="Pig Latinizer"
          info="teams are the best  joiajs jds oijdoa sdjas ojdo isaaj doij saodj oisaja dojs djsaoai  jdosajdo ijsaj dsja oid djo sia jdja sodj oa ssjd asjdoisj "
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