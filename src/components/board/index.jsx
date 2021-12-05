import React from 'react' 
import {Container , Text, Title, Category, ToggleMenu } from './styled' 
import { change } from './boardSlice'
import { useDispatch } from 'react-redux'

export default function Index() {

    const dispatch = useDispatch()

    const handleToggleMenu = () => { 
    }

    return (
         <Container>
             <Text>
                 <Title>Frontend Mentor</Title>
                 <Category>Feedback Board</Category> 
             </Text>
             <ToggleMenu className='' onClick={handleToggleMenu}>
                 <ul>
                     <li></li>
                     <li></li>
                     <li></li>
                 </ul>
             </ToggleMenu>
         </Container>
    )
}
