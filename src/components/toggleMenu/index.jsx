import React from 'react'
import {Tags, Roadmap} from 'components'
import {Container, Content} from './styled'
import { useSelector } from 'react-redux'

export default function Index() {
    const isOpen = useSelector(state => state.isToggleMenuOpen ) 
    return (
        <Container className={isOpen.payload ? 'open' : ''}>
            <Content>
                <Tags theme="toggle-menu"/>
                <Roadmap theme="toggle-menu"/>
            </Content>
        </Container>
    )
}
