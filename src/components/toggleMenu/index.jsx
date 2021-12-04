import React from 'react'
import {Tags, Roadmap} from 'components'
import {Container, Content} from './styled'

export default function Index() {
    return (
        <Container>
            <Content>
                <Tags theme="toggle-menu"/>
                <Roadmap theme="toggle-menu"/>
            </Content>
        </Container>
    )
}
