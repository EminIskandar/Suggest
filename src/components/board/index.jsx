import React from 'react' 
import {Container , Text, Title, Category, ToggleMenu } from './styled' 

export default function Index() {
    return (
         <Container>
             <Text>
                 <Title>Frontend Mentor</Title>
                 <Category>Feedback Board</Category> 
             </Text>
             <ToggleMenu className=''>
                 <ul>
                     <li></li>
                     <li></li>
                     <li></li>
                 </ul>
             </ToggleMenu>
         </Container>
    )
}
