import React from 'react'
import {Body3} from 'typography'
import {Container, Tags, Name } from './styled'

export default function Index() {
    return (
        <Container>
            <Tags>
                <Name>
                    <Body3>All</Body3>
                </Name>
                <Name>
                    <Body3>UI</Body3>
                </Name>
                <Name>
                    <Body3>UX</Body3>
                </Name>
                <Name>
                    <Body3>Enhancement</Body3>
                </Name>
                <Name>
                    <Body3>Bug</Body3>
                </Name>
                <Name>
                    <Body3>Feature</Body3>
                </Name>
            </Tags>
        </Container>
    )
}
