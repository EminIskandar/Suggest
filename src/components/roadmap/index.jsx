import React from 'react' 
import {Container, Header, Title, Link, Lists, ListsItem, Name, Count} from './styled'
import getSuggetsStatus from 'helpers/getSuggetsStatus'

export default function Index({theme}) {

    const status = getSuggetsStatus()

    return (
        <Container theme={theme}>
            <Header>
                <Title>Roadmap</Title>
                <Link>View</Link>
            </Header>
            <Lists>
                <ListsItem>
                    <Name>Planned</Name>
                    <Count>{status.planned}</Count>
                </ListsItem>
                <ListsItem>
                    <Name>In-Progress</Name>
                    <Count>{status.inProgress}</Count>
                </ListsItem>
                <ListsItem>
                    <Name>Live</Name>
                    <Count>{status.live}</Count>
                </ListsItem>
            </Lists>
        </Container>
    )
}
