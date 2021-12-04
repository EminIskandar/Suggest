import React from 'react'
import { Container , LeftSide, RightSide } from './styled'
import { Board, Tags, Roadmap, Bar, Suggestions } from 'components'

export default function Home() {
    return (
        <Container>
            <LeftSide>
                <Board/>
                <Tags/>
                <Roadmap/>
            </LeftSide>
            <RightSide>
                <Bar/>
                <Suggestions/>
            </RightSide> 
        </Container>
    )
}
