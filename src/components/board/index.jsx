import { useEffect } from 'react' 
import {Container , Text, Title, Category, ToggleMenu } from './styled' 
import { change } from './boardSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Index() {

    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.isToggleMenuOpen)

    const handleToggleMenu = () => { 
        dispatch(
            change({payload : !isOpen.payload})
        )
    } 

    useEffect(() => {

        //closed toggle menu 
        window.addEventListener('resize' , ()=>{
          const windowSize = window.innerWidth

          if(windowSize > 598){
            dispatch(
                change({payload : false})
            )
          } 

        })
    }, [])

    return (
         <Container>
             <Text>
                 <Title>Frontend Mentor</Title>
                 <Category>Feedback Board</Category> 
             </Text>
             <ToggleMenu className={isOpen ? 'open' : ''} onClick={handleToggleMenu}>
                 <ul>
                     <li></li>
                     <li></li>
                     <li></li>
                 </ul>
             </ToggleMenu>
         </Container>
    )
}
