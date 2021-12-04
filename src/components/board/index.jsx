import React from 'react'
import { H2, Body2 } from 'typography'
import {Container , Text } from './styled'
import colors from 'color'

export default function Index() {
    return (
         <Container>
             <Text>
                <H2 color={colors.white} >Frontend Mentor</H2>
                <Body2 color={colors.white} >Feedback Board</Body2>
             </Text>
         </Container>
    )
}
