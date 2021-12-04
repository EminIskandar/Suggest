import React from 'react'
import { Container , LeftSide, RightSide } from './styled'
import {Board, Tags} from 'components'

export default function Home() {
    return (
        <Container>
            <LeftSide>
                <Board/>
                <Tags/>
            </LeftSide>
            <RightSide></RightSide> 
        </Container>
    )
}
