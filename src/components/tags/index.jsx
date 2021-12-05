import React, { useState } from 'react'
import {Body3} from 'typography'
import {Container, Tags, Name } from './styled'
import getAllTags from 'helpers/getAllTags'

export default function Index({theme}) { 

    const allTags = getAllTags() 
    const [selected, setSelected] = useState('all')

    const handleSelectedTag = (name) => {
        setSelected(name)
    }

    return (
        <Container theme={theme}>
            <Tags theme={theme}>
                {
                    allTags.map( (name) => {
                        return  <Name className={selected === name  ? 'selected' : ''} onClick={ () => {handleSelectedTag(name)} }>
                                    <Body3>{name}</Body3>
                                </Name>
                    })
                } 
            </Tags>
        </Container>
    )
}
