import React, {useState} from 'react'
import {Title, Content } from './Navbar/Navbar.styles'



const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <>
        <Title onClick={() => setIsActive(!isActive)}>
            {title}
        </Title>
        {isActive && <Content> {content} </Content> }
      </>
    );
  };

export default Accordion