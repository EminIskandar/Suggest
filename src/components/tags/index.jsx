import React, { useState } from 'react'
import {Body3} from 'typography'
import {Container, Tags, Name } from './styled'
import getAllTags from 'helpers/getAllTags'
import { change } from "./tagsSlice";
import { useDispatch } from 'react-redux'

export default function Index({theme}) { 

    const allTags = getAllTags() 
    const [selected, setSelected] = useState('all')
    const dispatch = useDispatch()

    const handleSelectedTag = (name) => {
        setSelected(name)
        dispatch(
            change( {payload:name} )
        )
    }

    return (
        <Container theme={theme}>
            <Tags theme={theme}>
                {
                    allTags.map( (name) => {
                        return  <Name className={selected === name  ? 'selected' : ''} onClick={ () => {handleSelectedTag(name)} } key={name}>
                                    <Body3>{name}</Body3>
                                </Name>
                    })
                } 
            </Tags>
        </Container>
    )
}
