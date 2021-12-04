import React from 'react' 
import {Container, Header, Title, Link, Lists, ListsItem, Name, Count} from './styled'

export default function Index() {
    return (
        <Container>
            <Header>
                <Title>Roadmap</Title>
                <Link>View</Link>
            </Header>
            <Lists>
                <ListsItem>
                    <Name>Planned</Name>
                    <Count>2</Count>
                </ListsItem>
                <ListsItem>
                    <Name>In-Progress</Name>
                    <Count>3</Count>
                </ListsItem>
                <ListsItem>
                    <Name>Live</Name>
                    <Count>1</Count>
                </ListsItem>
            </Lists>
        </Container>
    )
}
