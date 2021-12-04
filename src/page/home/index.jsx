import React from 'react'
import { Container , LeftSide, RightSide } from './styled'
import { Board, Tags, Roadmap, Bar, Suggestions, ToggleMenu } from 'components'

export default function Home() {
    return (
        <Container>
            <LeftSide>
                <Board/>
                <Tags/>
                <Roadmap/>
                <ToggleMenu/>
            </LeftSide>
            <RightSide>
                <Bar/>
                <Suggestions/>
            </RightSide> 
        </Container>
    )
}
