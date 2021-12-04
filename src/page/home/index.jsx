import React from 'react'
import { Container , LeftSide, RightSide } from './styled'
import Board from 'components/board'

export default function Home() {
    return (
        <Container>
            <LeftSide>
                <Board/>
            </LeftSide>
            <RightSide></RightSide> 
        </Container>
    )
}
