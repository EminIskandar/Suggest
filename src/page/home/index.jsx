import React from 'react'
import { Container , LeftSide, RightSide } from './styled'
import {Board, Tags, Roadmap} from 'components'

export default function Home() {
    return (
        <Container>
            <LeftSide>
                <Board/>
                <Tags/>
                <Roadmap/>
            </LeftSide>
            <RightSide></RightSide> 
        </Container>
    )
}
