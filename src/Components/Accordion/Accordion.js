import React, {useState} from 'react'
import {Title, Content } from '../Navbar/Navbar.styles'
import Open from '../../Assets/images/icon-arrow-dark.svg'
import Close from '../../Assets/images/icon-arrow-light.svg'


const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <>
        <Title onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <div>{isActive ? <img src={Open} alt="" /> : <img src={Close} alt="" /> }</div>
        </Title>
        {isActive && <Content> {content} </Content> }
      </>
    );
  };

export default Accordion