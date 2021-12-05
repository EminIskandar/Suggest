import React, { useState, useEffect } from 'react'
import {Body3} from 'typography'
import {Container, Tags, Name } from './styled'
import getAllTags from 'helpers/getAllTags'
import { change } from "./tagsSlice";
import { change as changeSuggests } from "components/suggestions/suggestionsSlice";
import { useDispatch } from 'react-redux'
import tagFilter from 'helpers/tagFilter'

export default function Index({theme}) { 

    const allTags = getAllTags() 
    const [selected, setSelected] = useState('all')
    const data = tagFilter(selected) 
    const dispatch = useDispatch()

    const handleSelectedTag = (name) => {
        setSelected(name)
        dispatch(
            change( {payload:name} )
        )
    }

    useEffect(() => { 
        dispatch(
            changeSuggests({payload:data})
        ) 
    }, [selected])

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
